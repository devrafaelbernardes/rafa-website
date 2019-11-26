import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';

function AddBag(){
    return (
        <Row className={styles.addBag}>
            <Row>
                <Header
                    title={ Texts.ADD_BAG }
                />
            </Row>
            <Row className={styles.body}>
                { Texts.BAGS }
            </Row>
        </Row>
    );
}

export { AddBag };
export default AddBag;