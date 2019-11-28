import React from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';

function Result({ result, children }) {
    return (
        <Row className={styles.root + " " + (result === true ? styles.success : styles.error)}>
            { children }    
        </Row>
    );
}

export { Result };
export default Result;