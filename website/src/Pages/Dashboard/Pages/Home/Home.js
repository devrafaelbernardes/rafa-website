import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';

function Home(){
    return (
        <Row className={styles.home}>
            Home
        </Row>
    );
}

export { Home };
export default Home;