import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Button, LoadingComponent, Bag as DefaultBag } from '../..';
import { Form } from '..';
import { listBagsToEditPosition } from '../../../Rest/Functions';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function FormUpdatePositionBags({ textHeader }) {
    var [bags, setBags] = useState([]);
    var [result, setResult] = useState('');
    var [loading, setLoading] = useState(true);
    let IS_MOUNTED = false;
    useEffect(() => {
        IS_MOUNTED = true;
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
        console.log("ALTEROU")
    }, [bags]);

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

        } catch (error) { }

        await setResultForm(OKEY);
    }

    const setResultForm = (result) => {
        setResult(result);
    }

    const moveBag = async (currentPos, newPos) => {
        await setLoading(true);
        console.log(currentPos, newPos);
        
        if(newPos >= 0 && newPos < bags.length){
            console.log(bags);
            let list = bags.slice();
            let currentElement = await list.splice(currentPos)[0];
            await list.splice(newPos, 0, currentElement);
            console.log(list);
            
            await setBags(list);
        }
        await setLoading(false);
    }    

    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <LoadingComponent loading={loading}>
                    <Row>
                        {
                            bags && bags.length > 0 ? (
                                <DndProvider backend={HTML5Backend}>
                                    {
                                        bags.map((bag, i) => {
                                            const image = bag && bag.first_image && bag.first_image[TablesAPI.IMAGE.LOCATION] ? bag.first_image[TablesAPI.IMAGE.LOCATION] : null;
                                            return bag && (
                                                <Col key={i} xs="12" sm="12" md="4" lg="4">
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
                    {
                        result !== '' &&
                        <Row>
                            {result === true ? ("SUCESSO") : ("ERRO AO ADICIONAR")}
                        </Row>
                    }
                    <Row>
                        <Button
                            onClick={() => submit()}
                        >
                            {Texts.SAVE}
                        </Button>
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
                    title={name}
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