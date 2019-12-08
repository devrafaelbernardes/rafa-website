import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Button, LoadingComponent, Media as DefaultMedia } from '../..';
import { Form, Result } from '..';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { listMediasToEditPosition } from '../../../Rest/query';
import { updatePositionMedias } from '../../../Rest/mutation';

function FormUpdatePositionMedia({ textHeader }) {
    var [medias, setMedias] = useState([]);
    var [result, setResult] = useState('');
    var [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        try {
            listMediasToEditPosition()
                .then(async(response) => {
                    if (response && response.data && response.data.response) {
                        let listOriginalMedias = response.data.response;
                        if(IS_MOUNTED){
                            setMedias(listOriginalMedias);
                        }
                    }
                    if (IS_MOUNTED) {
                        setLoading(false);
                    }
                })
                .catch(e => (IS_MOUNTED) ? setLoading(false) : {})
        } catch (error) {
            if (IS_MOUNTED) {
                setLoading(false);
            }
        }

        return () => IS_MOUNTED = false;
    }, []);

    useEffect(() => {
        if (result !== '') {
            const timeout = setTimeout(() => {
                setResult('');
            }, 1500);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const submit = async () => {
        var OKEY = false;

        try {
            let listMedias = await medias.map((media, i) => ({ pos : i, code : media[TablesAPI.MEDIA.CODE] }));
            await updatePositionMedias(listMedias)
                .then(response => {
                    OKEY = response && response.data && response.data.response;
                })
        } catch (error) { }

        await setResultForm(OKEY);
    }

    const setResultForm = (result) => {
        setResult(result);
    }

    const moveMedia = async (currentPos, newPos) => {
        if(currentPos !== newPos){
            await setLoading(true);
            if(newPos >= 0 && newPos < medias.length){
                let list = medias;
                let currentElement = medias[currentPos];
                await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
                await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
                await setMedias(list);
            }
            await setLoading(false);
        }
    }    

    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <LoadingComponent loading={loading}>
                    <Row className={styles.header}>
                        {
                            result !== '' &&
                            <Result result={result}>
                                {result === true ? Texts.SUCCESS : Texts.ANY_ERROR }
                            </Result>
                        }
                        <Row>
                            <Button
                                onClick={() => submit()}
                            >
                                {Texts.SAVE}
                            </Button>
                        </Row>
                    </Row>
                    <Row>
                        {
                            medias && medias.length > 0 ? (
                                <DndProvider backend={HTML5Backend}>
                                    {
                                        medias.map((media, i) => {
                                            const image = media && media.image && media.image[TablesAPI.IMAGE.LOCATION] ? media.image[TablesAPI.IMAGE.LOCATION] : null;
                                            return media && (
                                                <Col className={styles.divMedia} key={i} xs="12" sm="12" md="6" lg="4">
                                                    <Media
                                                        image={image}
                                                        currentPos={i}
                                                        onDrop={(pos) => moveMedia(pos, i)}
                                                    />
                                                </Col>
                                            );
                                        })
                                    }
                                </DndProvider>
                            ) : (
                                    Texts.NO_MEDIA
                                )
                        }
                    </Row>
                </LoadingComponent>
            </Row>
        </Form>
    );
}

function Media({ image, currentPos, onDrop }) {
    const MEDIA = "Media";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: MEDIA, pos : currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: MEDIA,
        drop: (itemDrag) => onDrop && itemDrag ? onDrop(itemDrag.pos) : null,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <Row
            ref={drop}
            style={{ cursor : 'pointer' }}
        >
            <Row
                ref={drag}
            >
                <DefaultMedia
                    image={image}
                />
                {
                    isOver && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                zIndex: 1,
                                opacity: 0.5,
                                backgroundColor: 'var(--color-yellow)',
                            }}
                        />
                    )
                }
            </Row>
        </Row>
    );
}

export { FormUpdatePositionMedia };
export default FormUpdatePositionMedia;