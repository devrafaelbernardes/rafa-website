import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Button, LoadingComponent, Bag as DefaultBag } from '../..';
import { Form, Result } from '..';
import { listBagsToEditPosition, updatePositionBag } from '../../../Rest/Functions';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function FormUpdatePositionBags({ textHeader }) {
    var [bags, setBags] = useState([]);
    var [result, setResult] = useState('');
    var [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        try {
            listBagsToEditPosition()
                .then(async(response) => {
                    if (response && response.data && response.data.response) {
                        let listOriginalBags = response.data.response;
                        if(IS_MOUNTED){
                            setBags(listOriginalBags);
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
            let listBags = await bags.map((bag, i) => ({ pos : i, code : bag[TablesAPI.BAG.CODE] }));
            await updatePositionBag(listBags)
                .then(response => {
                    OKEY = response && response.data && response.data.response;
                })
        } catch (error) { }

        await setResultForm(OKEY);
    }

    const setResultForm = (result) => {
        setResult(result);
    }

    const moveBag = async (currentPos, newPos) => {
        if(currentPos !== newPos){
            await setLoading(true);
            if(newPos >= 0 && newPos < bags.length){
                let list = bags;
                let currentElement = bags[currentPos];
                await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
                await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
                await setBags(list);
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
                            bags && bags.length > 0 ? (
                                <DndProvider backend={HTML5Backend}>
                                    {
                                        bags.map((bag, i) => {
                                            const image = bag && bag.first_image && bag.first_image[TablesAPI.IMAGE.LOCATION] ? bag.first_image[TablesAPI.IMAGE.LOCATION] : null;
                                            return bag && (
                                                <Col className={styles.divBag} key={i} xs="12" sm="12" md="4" lg="4">
                                                    <Bag
                                                        image={image}
                                                        name={bag[TablesAPI.BAG.NAME]}
                                                        currentPos={i}
                                                        onDrop={(pos) => moveBag(pos, i)}
                                                    />
                                                </Col>
                                            );
                                        })
                                    }
                                </DndProvider>
                            ) : (
                                    Texts.NO_BAGS
                                )
                        }
                    </Row>
                </LoadingComponent>
            </Row>
        </Form>
    );
}

function Bag({ name, image, currentPos, onDrop }) {
    const BAG = "Bag";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: BAG, pos : currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: BAG,
        drop: (itemDrag) => onDrop && itemDrag ? onDrop(itemDrag.pos) : null,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <Row
            ref={drop}
        >
            <Row
                ref={drag}
            >
                <DefaultBag
                    image={image}
                    title={<span className={styles.titleBag}>{name}</span>}
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

export { FormUpdatePositionBags };
export default FormUpdatePositionBags;