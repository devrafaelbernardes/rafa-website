import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';

function Home(){
    return (
        <Row className={styles.home}>
            <Row className={styles.body}>
                { Texts.HOME }
            </Row>
        </Row>
    );
}

export { Home };
export default Home;