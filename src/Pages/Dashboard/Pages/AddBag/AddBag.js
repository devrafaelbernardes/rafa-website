import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';
import { FormAddBag } from '../../../../GeneralComponents';

function AddBag(){
    return (
        <Row className={styles.addBag}>
            <Row>
                <Header
                    title={ Texts.ADD_BAG }
                />
            </Row>
            <Row className={styles.body}>
                <FormAddBag />
            </Row>
        </Row>
    );
}

export { AddBag };
export default AddBag;