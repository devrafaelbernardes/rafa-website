import React from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Menu } from './Components';
import ImageLogo from '../../../Assets/Images/logo.png';

function Header(){
    return (
        <Row className={styles.header}>
            <Row className={styles.logo}>
                <Image src={ImageLogo} />
            </Row>
            <Row className={styles.menu}>
                <Menu />
            </Row>
        </Row>
    );
}

export { Header };
export default Header;