import React from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';
import Texts from '../../StaticContent/Texts';

function Bag({ image, title, total, descount, price_installments, installments, link }){
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
                descount &&
                <Row className={styles.descount}>
                    <del>
                        {descount}
                    </del>
                </Row>
            }
            <Row className={styles.total}>
                {total}
            </Row>
            {
                price_installments && installments &&
                <Row className={styles.installments}>
                    {Texts.OR} {installments} x {price_installments}
                </Row>
            }
            <Row className={styles.footer}>
                <Link
                    isLink
                    link={link}
                    className={styles.button}
                >
                    {Texts.MORE_DETAILS}
                </Link>
            </Row>
        </Row>
    );
}

export { Bag };
export default Bag;