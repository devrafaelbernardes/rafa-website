import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';
import { Header } from '../../Components';
import { FormAddMedia } from '../../../../GeneralComponents';

function AddMedia(){
    return (
        <Row className={styles.addMedia}>
            <Row>
                <Header
                    title={ Texts.ADD_MEDIA }
                />
            </Row>
            <Row className={styles.body}>
                <FormAddMedia />
            </Row>
        </Row>
    );
}

export { AddMedia };
export default AddMedia;