import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';

function Bags(){
    return (
        <Row className={styles.bags}>
            <Row>
                <Header
                    title={ Texts.BAGS }
                />
            </Row>
            <Row className={styles.body}>
                { Texts.BAGS }
            </Row>
        </Row>
    );
}

export { Bags };
export default Bags;