import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';

function Header({ title, subtitle }){
    return (
        <Row className={styles.header}>
            {
                title &&
                <Row className={styles.title}>
                    { title }
                </Row>
            }
            {
                subtitle &&
                <Row className={styles.subtitle}>
                    { subtitle }
                </Row>
            }
        </Row>
    );
}

export { Header };
export default Header;