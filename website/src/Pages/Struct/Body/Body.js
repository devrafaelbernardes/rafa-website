import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';

function Body({ children }){
    return (
        <Row className={styles.body}>
            { children }
        </Row>
    );
}

export { Body };
export default Body;