import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button, InputFile, Bag } from '../..';
import { Form, Result } from '..';
import { addMedia } from '../../../Rest/Functions';
import { toDecimal } from '../../../StaticContent/Functions';

function FormAddBag({ textHeader }){
    var [inputs, setInputs] = useState({
        name : '',
        totalPrice : '',
        discountPrice : '',
        installmentsQuantity : '',
        installmentsPrice : '',
        link : ''
    });
    var [image, setImage] = useState('');
    var [result, setResult] = useState('');
    var { name, totalPrice, discountPrice, installmentsPrice, installmentsQuantity } = inputs;
    
    useEffect(() => {
        if(result !== ''){
            const timeout = setTimeout(() => {
                setResult('');
            }, 1500);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [result]);


    const submit = async() => {
        var { link } = inputs;
        var OKEY = false;

        try {
            await addMedia(link, image)
            .then(
                response => {
                    if(response && response.status && response.media){
                        OKEY = response.status;
                    }
                }
            )
        } catch (error) {}

        await setResultForm(OKEY);
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }

    const changeInputImage = (e) => {
        try {
            var image = e.target.files[0];
            if(image){
                setImage(image);
            }    
        } catch (error) {}
    }

    const setResultForm = (result) => {
        setResult(result);
    }
    discountPrice = discountPrice ? toDecimal(discountPrice) : null;
    totalPrice = totalPrice ? toDecimal(totalPrice) : null;

    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <Row className={styles.previewBag}>
                    <Col xs="12" sm="12" md="6" lg="5">
                        <Bag 
                            image={image ? URL.createObjectURL(image) : null}
                            title={name}
                            installments={installmentsQuantity}
                            price_installments={installmentsPrice}
                            descount={discountPrice}
                            total={totalPrice}
                        />
                    </Col>
                </Row>
                <Row>
                    <InputFile
                        name="image"
                        onChange={changeInputImage}
                    >
                        { Texts.ADD_IMAGE }
                    </InputFile>
                </Row>
                <Row>
                    <Input 
                        name="name"
                        placeholder={Texts.BAG_NAME}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="discountPrice"
                        placeholder={Texts.DISCOUNT_PRICE}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="totalPrice"
                        placeholder={Texts.TOTAL_PRICE}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="installmentsQuantity"
                        placeholder={Texts.INSTALLMENTS_QUANTITY}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="installmentsPrice"
                        placeholder={Texts.INSTALLMENTS_PRICE}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="link"
                        placeholder={Texts.LINK_BAG_ON_WEBSITE}
                        onChange={changeInput}
                    />
                </Row>
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
                        { Texts.SAVE }
                    </Button>
                </Row>
            </Row>
        </Form>
    );
}

export { FormAddBag };
export default FormAddBag;