import React, { useContext } from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Menu } from './Components';
import ImageLogo from '../../../Assets/Images/logo.png';
import { ContextApp } from '../../../Contexts';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { Link } from '../../../GeneralComponents';
import Texts from '../../../StaticContent/Texts';

function Header(){
    let { authenticated, user, doLogout } = useContext(ContextApp);
    return (
        <Row className={styles.header}>
            <Row className={styles.logo}>
                <Image src={ImageLogo} />
            </Row>
            <Row className={styles.menu}>
                <Menu />
            </Row>
            {
                authenticated && user &&
                <Row className={styles.submenuAuthenticated}>
                    {Texts.HELLO} {user[TablesAPI.USER.NAME]}, <Link className={styles.linkLogout} onClick={() => doLogout()}> {Texts.QUIT}</Link>.
                </Row>
            }
        </Row>
    );
}

export { Header };
export default Header;