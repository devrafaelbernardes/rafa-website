import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../StaticContent/Texts';

function Error(){
    return (
        <Row className={styles.error}>
            <Row className={styles.title}>
                Ooops!
            </Row>
            <Row className={styles.subtitle}>
                { Texts.SORRY_PAGE_NOT_FOUND }
            </Row>
        </Row>
    );
}

export { Error };
export default Error;