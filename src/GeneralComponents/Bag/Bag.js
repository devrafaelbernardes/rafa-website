import React, { useEffect, useState } from 'react';
import { Row, Image, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';
import Texts from '../../StaticContent/Texts';
import { toDecimal } from '../../StaticContent/Functions';

function Bag({ first_image, second_image, title, total, descount, price_installments, installments, link, right }){
    var [totalDecimal, setTotalDecimal] = useState(null);
    var [discountDecimal, setDiscountDecimal] = useState(null);
    var [priceInstallmentsDecimal, setPriceInstallmentsDecimal] = useState(null);
    right = right === true;

    useEffect(() => {
        let t = total ? parseFloat(total, 10) : 0;
        let d = descount ? parseFloat(descount, 10) : 0;
        
        if(t < d){
            addDecimal(d, setTotalDecimal);
            addDecimal(t, setDiscountDecimal);
        }else{
            addDecimal(d, setDiscountDecimal);
            addDecimal(t, setTotalDecimal);
        }
    }, [descount, total]);

    useEffect(() => {
        addDecimal(price_installments, setPriceInstallmentsDecimal);
    }, [price_installments]);

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
                        {title}
                    </Row>
                    {
                        discountDecimal &&
                        <Row className={styles.descount}>
                            <del className={classRight}>
                                {discountDecimal}
                            </del>
                        </Row>
                    }
                    {
                        totalDecimal &&
                        <Row className={styles.total + classRight}>
                            {totalDecimal}
                        </Row>
                    }
                    {
                        price_installments && installments &&
                        <Row className={styles.installments + classRight}>
                            {Texts.OR} {installments} x {priceInstallmentsDecimal}
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