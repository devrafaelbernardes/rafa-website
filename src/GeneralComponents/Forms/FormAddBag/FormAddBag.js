import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
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
    var [reset, setReset] = useState(null);
    var [result, setResult] = useState('');
    let [addBag, { data, error }] = useMutation(ADD_BAG);
    var { name, totalPrice, deposit, discountPrice, installmentsPrice, installmentsQuantity, link } = inputs;

    useEffect(() => {
        if(data || error){
            let result_submit = data && data.response ? true : false;
            setResult(result_submit);
            if(result_submit === true){
                setFirstImage(null);
                setSecondImage(null);
                setInputs({
                    name : '',
                    totalPrice : '',
                    discountPrice : '',
                    installmentsQuantity : '',
                    installmentsPrice : '',
                    deposit : '',
                    link : ''
                });
                setReset(true);
            }
        }
    }, [data, error]);

    useEffect(() => {
        let IS_MOUNTED = true;
        if(result !== ''){
            const timeout = setTimeout(async() => {
                if(IS_MOUNTED){
                    setResult('');
                    setReset(false);
                }
            }, 1500);
            return () => {
                IS_MOUNTED = false;
                clearTimeout(timeout);
            };
        }
        return () => {
            IS_MOUNTED = false;
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
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }

    const changeInputImage = (e, func) => {
        try {
            let image = e.target.files[0];
            if(image){
                func(image);
            }else{
                func(null);
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
                    <Bag 
                        first_image={firstImage ? URL.createObjectURL(firstImage) : firstImageDefault}
                        second_image={secondImage ? URL.createObjectURL(secondImage) : secondImageDefault}
                        title={name}
                        installments={installmentsQuantity}
                        price_installments={installmentsPrice}
                        discount={discountPrice}
                        total={totalPrice}
                        deposit={deposit}
                    />
                </Row>
                <Row>
                    <InputFile
                        name="firstImage"
                        onChange={changeInputFirstImage}
                    >
                        { firstImage ? Texts.CHANGE_FIRST_IMAGE : Texts.ADD_FIRST_IMAGE }
                    </InputFile>
                </Row>
                <Row>
                    <InputFile
                        name="secondImage"
                        onChange={changeInputSecondImage}
                    >
                        { secondImage ? Texts.CHANGE_SECOND_IMAGE : Texts.ADD_SECOND_IMAGE }
                    </InputFile>
                </Row>
                <Row>
                    <Input 
                        title={Texts.BAG_NAME}
                        name="name"
                        value={name}
                        required
                        placeholder={Texts.BAG_NAME}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.TOTAL_PRICE}
                        name="totalPrice"
                        value={totalPrice}
                        placeholder={Texts.TOTAL_PRICE}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.DISCOUNT_PRICE}
                        name="discountPrice"
                        value={discountPrice}
                        placeholder={Texts.DISCOUNT_PRICE}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.INSTALLMENTS_QUANTITY}
                        name="installmentsQuantity"
                        value={installmentsQuantity}
                        placeholder={Texts.INSTALLMENTS_QUANTITY}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.INSTALLMENTS_PRICE}
                        name="installmentsPrice"
                        value={installmentsPrice}
                        placeholder={Texts.INSTALLMENTS_PRICE}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.VALUE_DEPOSIT}
                        name="deposit"
                        value={deposit}
                        placeholder={Texts.VALUE_DEPOSIT}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <Input 
                        title={Texts.LINK_BAG_ON_WEBSITE}
                        name="link"
                        value={link}
                        placeholder={Texts.LINK_BAG_ON_WEBSITE}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                {
                    (result !== '') &&
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