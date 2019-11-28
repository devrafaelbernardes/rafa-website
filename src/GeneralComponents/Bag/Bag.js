import React, { useEffect, useState } from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';
import Texts from '../../StaticContent/Texts';
import { toDecimal } from '../../StaticContent/Functions';

function Bag({ image, title, total, descount, price_installments, installments, link }){
    var [totalDecimal, setTotalDecimal] = useState(null);
    var [discountDecimal, setDiscountDecimal] = useState(null);
    var [priceInstallmentsDecimal, setPriceInstallmentsDecimal] = useState(null);

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

    return (
        <Row className={styles.bag}>
            {
                image &&
                <Row className={styles.image}>
                    <Image src={image} />
                </Row>
            }
            <Row className={styles.title}>
                {title}
            </Row>
            {
                discountDecimal &&
                <Row className={styles.descount}>
                    <del>
                        {discountDecimal}
                    </del>
                </Row>
            }
            {
                totalDecimal &&
                <Row className={styles.total}>
                    {totalDecimal}
                </Row>
            }
            {
                price_installments && installments &&
                <Row className={styles.installments}>
                    {Texts.OR} {installments} x {priceInstallmentsDecimal}
                </Row>
            }
            {
                link &&
                <Row className={styles.footer}>
                    <Link
                        isLink
                        link={link}
                        className={styles.button}
                    >
                        {Texts.MORE_DETAILS}
                    </Link>
                </Row>
            }
        </Row>
    );
}

export { Bag };
export default Bag;