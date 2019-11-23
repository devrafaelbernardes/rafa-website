import React from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';

function Form({ textHeader, children }){
    return (
        <Row className={styles.root}>
            {
                textHeader &&
                <Row className={styles.header}>
                    { textHeader }
                </Row>
            }
            <Row>
                { children }
            </Row>
        </Row>
    );
}

export { Form };
export default Form;