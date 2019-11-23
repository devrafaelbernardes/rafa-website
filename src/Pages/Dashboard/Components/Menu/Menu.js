import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Link } from '../../../../GeneralComponents';
import Texts from '../../../../StaticContent/Texts';
import { DashboardURL } from '../../../../Routers/URLs';

function Menu(){
    var REDIRECT = DashboardURL().REDIRECT;
    return (
        <Row className={styles.menu}>
            <Row className={styles.header}>
                { Texts.OPTION }
            </Row>
            <Row className={styles.body}>
                <Row className={styles.divLinks}>
                    <Link
                        exact
                        isNavLink
                        link={REDIRECT.BASE}
                        className={styles.links}
                        activeClassName={styles.activeLinks}
                    >
                        { Texts.HOME }
                    </Link>
                </Row>
                <Row className={styles.divLinks}>
                    <Link 
                        isNavLink
                        link={REDIRECT.BAG}
                        className={styles.links}
                        activeClassName={styles.activeLinks}
                    >
                        { Texts.BAGS }
                    </Link>
                </Row>
                <Row className={styles.divLinks}>
                    <Link 
                        isNavLink
                        link={REDIRECT.MEDIA}
                        className={styles.links}
                        activeClassName={styles.activeLinks}
                    >
                        { Texts.MEDIA }
                    </Link>
                </Row>
            </Row>
        </Row>
    );
}

export { Menu };
export default Menu;