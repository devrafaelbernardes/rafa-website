import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';

function About(){
    return (
        <Row className={styles.about}>
            About
        </Row>
    );
}

export { About };
export default About;