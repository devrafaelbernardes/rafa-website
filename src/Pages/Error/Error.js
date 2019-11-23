import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';

function Error(){
    return (
        <Row className={styles.error}>
            Error
        </Row>
    );
}

export { Error };
export default Error;