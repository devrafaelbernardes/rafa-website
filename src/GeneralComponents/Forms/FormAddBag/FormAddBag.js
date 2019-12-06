import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Col } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button, InputFile, Bag } from '../..';
import { Form, Result } from '..';
import { toDecimal, cleanValueFloat, cleanValueInt } from '../../../StaticContent/Functions';
import secondImageDefault from '../../../Assets/Images/secondImage.png';
import firstImageDefault from '../../../Assets/Images/firstImage.png';
import { useMutation } from 'react-apollo';
import mutation, { ADD_BAG } from '../../../Rest/mutation';
import { getToken } from '../../../Storage/Session';

function FormAddBag({ textHeader }){
    var [inputs, setInputs] = useState({
        name : '',
        totalPrice : '',
        discountPrice : '',
        installmentsQuantity : '',
        installmentsPrice : '',
        deposit : '',
        link : ''
    });
    var [firstImage, setFirstImage] = useState(null);
    var [secondImage, setSecondImage] = useState(null);
    var [result, setResult] = useState('');
    var { name, totalPrice, deposit, discountPrice, installmentsPrice, installmentsQuantity, link } = inputs;

    let [addBag, { data, error }] = useMutation(ADD_BAG);
    
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
        try { 
            await addBag(mutation(
                { 
                    token: getToken(), 
                    name, 
                    total: cleanValueFloat(totalPrice), 
                    discount: cleanValueFloat(discountPrice), 
                    deposit : cleanValueFloat(deposit), 
                    installments: cleanValueInt(installmentsQuantity), 
                    installments_price: cleanValueFloat(installmentsPrice),
                    link 
                }, 
                {
                    first_image : firstImage, 
                    second_image : secondImage
                }
            ));
        } catch (e) {}
        
        await setResult(data && data.response ? true : false);
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }

    const changeInputImage = (e, func) => {
        try {
            let image = e.target.files[0];
            if(image){
                func(image);
            }    
        } catch (error) {}
    }

    const changeInputFirstImage = (e) => {
        changeInputImage(e, setFirstImage);
    }

    const changeInputSecondImage = (e) => {
        changeInputImage(e, setSecondImage);
    }

    discountPrice = discountPrice ? toDecimal(discountPrice) : null;
    totalPrice = totalPrice ? toDecimal(totalPrice) : null;
    
    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <Row className={styles.previewBag}>
                    <Col xs="12" sm="12" md="12" lg="8">
                        <Bag 
                            first_image={firstImage ? URL.createObjectURL(firstImage) : firstImageDefault}
                            second_image={secondImage ? URL.createObjectURL(secondImage) : secondImageDefault}
                            title={name ? name : Texts.BAG_NAME}
                            installments={installmentsQuantity}
                            price_installments={installmentsPrice}
                            descount={discountPrice}
                            total={totalPrice}
                        />
                    </Col>
                </Row>
                <Row>
                    <InputFile
                        name="firstImage"
                        onChange={changeInputFirstImage}
                    >
                        { Texts.ADD_FIRST_IMAGE }
                    </InputFile>
                </Row>
                <Row>
                    <InputFile
                        name="secondImage"
                        onChange={changeInputSecondImage}
                    >
                        { Texts.ADD_SECOND_IMAGE }
                    </InputFile>
                </Row>
                <Row>
                    <Input 
                        name="name"
                        required
                        placeholder={Texts.BAG_NAME}
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
                        name="discountPrice"
                        placeholder={Texts.DISCOUNT_PRICE}
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
                        name="deposit"
                        placeholder={Texts.VALUE_DEPOSIT}
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
                    (result !== '') &&
                    <Result result={result}>
                        {data.response ? Texts.SUCCESS : Texts.ANY_ERROR }
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