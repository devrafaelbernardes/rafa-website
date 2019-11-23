import React from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import Texts from '../../StaticContent/Texts';
import { LoadingIcon } from '../Icons/Icons';

function Loading(){
    return (
        <Row className={styles.root}>
            <Row className={styles.spinner}>
                <LoadingIcon spin />
            </Row>
            <Row className={styles.text}>
                { Texts.LOADING }...
            </Row>
        </Row>
    );
}

export { Loading };
export default Loading;