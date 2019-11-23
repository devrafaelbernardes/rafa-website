import React from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Menu } from './Components';
import ImageLogo from '../../../Assets/Images/logo.png';

function Header(){
    return (
        <Row className={styles.header}>
            <div className={styles.logo}>
                <Image src={ImageLogo} />
            </div>
            <div className={styles.menu}>
                <Menu />
            </div>
        </Row>
    );
}

export { Header };
export default Header;