import React, { useEffect, useState, useContext } from 'react';
import { Row, Image, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';
import Texts from '../../StaticContent/Texts';
import { toDecimal } from '../../StaticContent/Functions';
import { ContextApp } from '../../Contexts';
import { Button } from '../';
import { DashboardURL } from '../../Routers/URLs';
import { removeBag } from '../../Rest/mutation';

function Bag({ showButtons, first_image, second_image, code, title, total, deposit, discount, price_installments, installments, link, right }){
    var [totalDecimal, setTotalDecimal] = useState(null);
    var [discountDecimal, setDiscountDecimal] = useState(null);
    var [priceInstallmentsDecimal, setPriceInstallmentsDecimal] = useState(null);
    var [depositDecimal, setDepositDecimal] = useState(null);
    var [resultRemove, setResultRemove] = useState('');
    var { authenticated, reloadPage } = useContext(ContextApp);
    right = right === true;
    authenticated = authenticated === true;
    showButtons = showButtons === true;
    
    useEffect(() => {
        try {
            let t = total ? parseFloat(total, 10) : 0;
            let d = discount ? parseFloat(discount, 10) : 0;
            if((t && !d) || (t === d)){
                //console.log("NÃO TEM DESCONTO OU É IGUAL");
                addDecimal(t, setDiscountDecimal);    
                addDecimal(null, setTotalDecimal);
            }else if(d && !t){
                //console.log("NÃO TEM TOTAL");
                addDecimal(d, setDiscountDecimal);    
                addDecimal(null, setTotalDecimal);
            }else if(t > d){
                //console.log("TOTAL >>>>> DESCONTO");
                addDecimal(d, setDiscountDecimal);    
                addDecimal(t, setTotalDecimal);
            }else{
                //console.log("TOTAL <<<<< DESCONTO");
                addDecimal(t, setDiscountDecimal);
                addDecimal(d, setTotalDecimal);
            }
        } catch (error) {}
    }, [discount, total]);

    useEffect(() => {
        addDecimal(price_installments, setPriceInstallmentsDecimal);
    }, [price_installments]);

    useEffect(() => {
        addDecimal(deposit, setDepositDecimal);
    }, [deposit]);

    useEffect(() => {
        if(resultRemove !== ''){
            if(resultRemove === true && reloadPage){
                reloadPage();
                return;
            }
            const timeout = setTimeout(() => {
                setResultRemove('');
            }, 1500);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [resultRemove, reloadPage]);

    const submitRemove = async() => {
        let OKEY = false;
        if(code){
            try {
                await removeBag(code)
                    .then(response => {
                        OKEY = response && response.data && response.data.response;
                    })
            } catch (error) {}
        }
        await setResultRemove(OKEY);
    }

    const addDecimal = (value, func) => {
        if(value){
            value = (value+"").replace(',','.');
            value = parseFloat(value, 10);
            func(toDecimal(value));
        }else{
            func(null);
        }
    }
    let classRight = " "+ (right ? styles.right : styles.left);
    let tam = second_image ? 5 : 12;
    return (
        <Row className={styles.bag + (right ? " " + styles.divReverse : "")}>
            <Col className={styles.bagInfo} xs="12" sm="12" md={tam} lg={tam} style={second_image ? !right ? { paddingLeft : 0 } : { paddingRight : 0 } : { padding : 0 }}>
                <Row>
                    <Row className={styles.title + classRight}>
                        {`${Texts.BAG} "${title ? title : Texts.NO_NAME}"`}
                    </Row>
                    <Row className={styles.price + classRight}>
                        {
                            totalDecimal &&
                            <span className={styles.total}>{`${Texts.OF}: ${totalDecimal}`}</span>
                        }
                        {
                            discountDecimal &&
                            <span className={styles.discount} style={totalDecimal && { color : 'var(--color-red)' }}>{totalDecimal ? `${Texts.PER}: ${discountDecimal}` : discountDecimal}</span>
                        }
                    </Row>
                    {
                        price_installments && installments &&
                        <Row className={styles.installments + classRight}>
                            {installments} x {priceInstallmentsDecimal}
                        </Row>
                    }
                    {
                        deposit &&
                        <Row className={styles.deposit + classRight}>
                            {Texts.OR} {depositDecimal} {Texts.ON_DEPOSIT}
                        </Row>
                    }
                    {
                        code && showButtons && authenticated &&
                        <Row className={classRight}>
                            {
                                resultRemove === false &&
                                <Row className={classRight} style={{ color : 'red', fontSize : 14 }}>{Texts.ERROR}</Row>
                            }
                            <Row className={styles.buttons + classRight}>
                                <Link
                                    button
                                    link={ DashboardURL().REDIRECT.EDIT_BAG(code) }
                                    style={{ marginRight : 5 }}
                                >
                                    { Texts.EDIT }
                                </Link>
                                <Button
                                    onClick={() => submitRemove()}
                                >
                                    { Texts.REMOVE }
                                </Button>
                            </Row>
                        </Row>
                    }
                    {
                        first_image &&
                        <Row className={styles.divImage}>
                            <Box link={link}>
                                <Image className={styles.image} src={first_image} />
                            </Box>
                        </Row>
                    }
                </Row>
            </Col>
            {
                second_image &&
                <Col className={styles.divSecondImage} xs="12" sm="12" md="7" lg="7" style={right ? { paddingLeft : 0 } : { paddingRight : 0 }}>
                    <Box link={link}>
                        <Image className={styles.secondImage} src={second_image} />
                    </Box>
                </Col>
            }
        </Row>
    );
}

function Box({ children, link }){
    var [open, setOpen] = useState(false);
    return (
        <Row className={styles.box} onMouseOver={() => setOpen(true)}>
            {
                link && 
                <span onMouseOut={() => setOpen(false)}>
                    <Link
                        isLink
                        link={link}
                        style={{ display : !open ? 'none' : 'flex' }}
                    >
                        <Row className={styles.divInfo}>
                            <Row>
                                <Row>
                                    { Texts.DO_YOU_WANT }
                                </Row>
                                <Row>
                                    { Texts.CLICK_HERE }
                                </Row>
                            </Row>
                        </Row>
                    </Link>
                </span>
            }
            { children }
        </Row>
    );
}

export { Bag };
export default Bag;