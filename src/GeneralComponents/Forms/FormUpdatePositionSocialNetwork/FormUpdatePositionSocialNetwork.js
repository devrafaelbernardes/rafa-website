import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Button, LoadingComponent, Media as DefaultSocialNetwork } from '../..';
import { Form, Result } from '..';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { listSocialNetworksToEditPosition } from '../../../Rest/query';
import { updatePositionSocialNetworks } from '../../../Rest/mutation';

export function FormUpdatePositionSocialNetwork({ textHeader }) {
    var [socialNetworks, setSocialNetworks] = useState([]);
    var [result, setResult] = useState('');
    var [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        try {
            listSocialNetworksToEditPosition()
                .then(async(response) => {
                    if (response && response.data && response.data.response) {
                        let listOriginalSocialNetwork = response.data.response;
                        if(IS_MOUNTED){
                            setSocialNetworks(listOriginalSocialNetwork);
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
            let listSocialNetworks = await socialNetworks.map((socialNetwork, i) => ({ pos : i, code : socialNetwork[TablesAPI.SOCIAL_NETWORK.CODE] }));
            await updatePositionSocialNetworks(listSocialNetworks)
                .then(response => {
                    OKEY = response && response.data && response.data.response;
                })
        } catch (error) { }

        await setResultForm(OKEY);
    }

    const setResultForm = (result) => {
        setResult(result);
    }

    const moveSocialNetwork = async (currentPos, newPos) => {
        if(currentPos !== newPos){
            await setLoading(true);
            if(newPos >= 0 && newPos < socialNetworks.length){
                let list = socialNetworks;
                let currentElement = socialNetworks[currentPos];
                await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
                await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
                await setSocialNetworks(list);
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
                            socialNetworks && socialNetworks.length > 0 ? (
                                <DndProvider backend={HTML5Backend}>
                                    {
                                        socialNetworks.map((socialNetwork, i) => {
                                            const image = socialNetwork && socialNetwork.image && socialNetwork.image[TablesAPI.IMAGE.LOCATION] ? socialNetwork.image[TablesAPI.IMAGE.LOCATION] : null;
                                            return socialNetwork && (
                                                <Col className={styles.divSocialNetwork} key={i} xs="12" sm="12" md="6" lg="4">
                                                    <SocialNetwork
                                                        image={image}
                                                        currentPos={i}
                                                        onDrop={(pos) => moveSocialNetwork(pos, i)}
                                                    />
                                                </Col>
                                            );
                                        })
                                    }
                                </DndProvider>
                            ) : (
                                    Texts.NO_SOCIAL_NETWORK
                                )
                        }
                    </Row>
                </LoadingComponent>
            </Row>
        </Form>
    );
}

function SocialNetwork({ image, currentPos, onDrop }) {
    const SOCIAL_NETWORK = "SocialNetwork";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: SOCIAL_NETWORK, pos : currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: SOCIAL_NETWORK,
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
                <DefaultSocialNetwork
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

export default FormUpdatePositionSocialNetwork;