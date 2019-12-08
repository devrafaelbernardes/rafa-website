import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button, Bag } from '../..';
import { Form, Result } from '..';
import secondImageDefault from '../../../Assets/Images/secondImage.png';
import firstImageDefault from '../../../Assets/Images/firstImage.png';
import { getBagToEdit } from '../../../Rest/query';
import { TablesAPI } from '../../../Rest/TablesAPI';
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { useMutation } from 'react-apollo';
import mutation, { EDIT_BAG } from '../../../Rest/mutation';
import { getToken } from '../../../Storage/Session';
import { cleanValueFloat, cleanValueInt } from '../../../StaticContent/Functions';

function FormEditBag({ textHeader, code, setResultExistsBag }){
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
    var [loading, setLoading] = useState(true);
    var [existsBag, setExistsBag] = useState(false);
    var [editBag, { data, error }] = useMutation(EDIT_BAG);
    var { name, totalPrice, deposit, discountPrice, installmentsPrice, installmentsQuantity, link } = inputs;
    //console.log(data);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        try {
            getBagToEdit({ code })
                .then(response => {
                    if(IS_MOUNTED){
                        if(response && response.data && response.data.response){
                            const bag = response.data.response;
                            setInputs({
                                name : bag[TablesAPI.BAG.NAME],
                                totalPrice : bag[TablesAPI.BAG.TOTAL_PRICE],
                                discountPrice : bag[TablesAPI.BAG.DISCOUNT_PRICE],
                                installmentsQuantity : bag[TablesAPI.BAG.INSTALLMENTS],
                                installmentsPrice : bag[TablesAPI.BAG.INSTALLMENTS_PRICE],
                                deposit : bag[TablesAPI.BAG.DEPOSIT],
                                link : bag[TablesAPI.BAG.LINK]
                            });
                            if(bag.first_image && bag.first_image[TablesAPI.IMAGE.LOCATION]){
                                setFirstImage(bag.first_image[TablesAPI.IMAGE.LOCATION]);
                            }
                            if(bag.second_image && bag.second_image[TablesAPI.IMAGE.LOCATION]){
                                setSecondImage(bag.second_image[TablesAPI.IMAGE.LOCATION]);
                            }
                            setExistsBag(true);
                        }else{
                            setExistsBag(false);
                        }
                        setLoading(false);
                    }
                })
                .catch(e => {
                    if(IS_MOUNTED){
                        setExistsBag(false);
                        setLoading(false);
                    }
                })
        } catch (error) {
            if(IS_MOUNTED){
                setExistsBag(false);
                setLoading(false);
            }
        }

        return () => {
            IS_MOUNTED = false;
        };
    }, [code]);

    useEffect(() => {
        if(data || error){
            let result_submit = data && data.response ? true : false;
            setResult(result_submit);
        }
    }, [data, error]);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        if(result !== ''){
            const timeout = setTimeout(async() => {
                if(IS_MOUNTED){
                    setResult('');
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

    useEffect(() => {
        if(setResultExistsBag){
            setResultExistsBag(existsBag);
        }
    }, [existsBag, setResultExistsBag]);

    const submit = async() => {
        try { 
            await editBag(mutation({
                token: getToken(), 
                code,
                name, 
                total: cleanValueFloat(totalPrice), 
                discount: cleanValueFloat(discountPrice), 
                deposit : cleanValueFloat(deposit), 
                installments: cleanValueInt(installmentsQuantity), 
                installments_price: cleanValueFloat(installmentsPrice),
                link 
            }));
        } catch (e) {}
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }
    
    
    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <LoadingComponent loading={loading}>
                    {
                        existsBag ? (
                            <Row className={styles.general}>
                                <Row className={styles.previewBag}>
                                    <Bag 
                                        first_image={firstImage ? firstImage : firstImageDefault}
                                        second_image={secondImage ? secondImage : secondImageDefault}
                                        title={name}
                                        installments={installmentsQuantity}
                                        price_installments={installmentsPrice}
                                        discount={discountPrice}
                                        total={totalPrice}
                                        deposit={deposit}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.BAG_NAME}
                                        name="name"
                                        value={name}
                                        required
                                        placeholder={Texts.BAG_NAME}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.TOTAL_PRICE}
                                        name="totalPrice"
                                        value={totalPrice}
                                        placeholder={Texts.TOTAL_PRICE}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.DISCOUNT_PRICE}
                                        name="discountPrice"
                                        value={discountPrice}
                                        placeholder={Texts.DISCOUNT_PRICE}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.INSTALLMENTS_QUANTITY}
                                        name="installmentsQuantity"
                                        value={installmentsQuantity}
                                        placeholder={Texts.INSTALLMENTS_QUANTITY}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.INSTALLMENTS_PRICE}
                                        name="installmentsPrice"
                                        value={installmentsPrice}
                                        placeholder={Texts.INSTALLMENTS_PRICE}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.VALUE_DEPOSIT}
                                        name="deposit"
                                        value={deposit}
                                        placeholder={Texts.VALUE_DEPOSIT}
                                        onChange={changeInput}
                                    />
                                </Row>
                                <Row>
                                    <Input 
                                        title={Texts.LINK_BAG_ON_WEBSITE}
                                        name="link"
                                        value={link}
                                        placeholder={Texts.LINK_BAG_ON_WEBSITE}
                                        onChange={changeInput}
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
                        ) : (
                            Texts.NO_BAG
                        )
                    }
                </LoadingComponent>
            </Row>
        </Form>
    );
}

export { FormEditBag };
export default FormEditBag;