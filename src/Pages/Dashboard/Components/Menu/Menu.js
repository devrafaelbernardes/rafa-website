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
                    <LinkMenu 
                        exact
                        link={REDIRECT.BAG}
                    >
                        { Texts.BAGS }
                    </LinkMenu>
                </Row>
                <Row className={styles.divLinks}>
                    <LinkMenu 
                        link={REDIRECT.MEDIA}
                    >
                        { Texts.MEDIA }
                    </LinkMenu>
                </Row>
                <Row className={styles.divLinks}>
                    <LinkMenu 
                        link={REDIRECT.ADD_BAG}
                    >
                        { Texts.ADD_BAG }
                    </LinkMenu>
                </Row>
                <Row className={styles.divLinks}>
                    <LinkMenu 
                        link={REDIRECT.ADD_MEDIA}
                    >
                        { Texts.ADD_MEDIA }
                    </LinkMenu>
                </Row>
                <Row className={styles.divLinks}>
                    <LinkMenu 
                        link={REDIRECT.EDIT_BAG('')}
                    >
                        { Texts.EDIT_BAG }
                    </LinkMenu>
                </Row>
            </Row>
        </Row>
    );
}

function LinkMenu({ children, link, exact }){
    return (
        <Link 
            exact={exact}
            isNavLink
            link={link}
            className={styles.links}
            activeClassName={styles.activeLinks}
        >
            { children }
        </Link>
    );
}

export { Menu };
export default Menu;