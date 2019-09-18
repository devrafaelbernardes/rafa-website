import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Item, Title } from './Components';
import { FANTASY_NAME, DEVELOPER, CONTACT_DEVELOPER, LOCAL, CNPJ, PHONE, CONTACT_FACEBOOK, CONTACT_INSTAGRAM } from '../../../StaticContent/InfoSite';
import { Link, FacebookIcon, InstagramIcon } from '../../../GeneralComponents';
import Texts from '../../../StaticContent/Texts';
import { DashboardURL } from '../../../Routers/URLs';

function Footer(){
    return (
        <Row className={styles.footer}>
            <Row className={styles.upperText + " " + styles.network}>
                <div>
                    <Row className={styles.icons + " " + styles.alignRight}>
                        <Link
                            isLink
                            link={CONTACT_FACEBOOK}
                        >
                            <FacebookIcon />
                        </Link>
                    </Row>
                    <Row>
                        <Title>Facebook</Title>
                    </Row>
                </div>
                <div>
                    <Row className={styles.icons}>
                        <Link
                            isLink
                            link={CONTACT_INSTAGRAM}
                        >
                            <InstagramIcon />
                        </Link>
                    </Row>
                    <Row>
                        <Title>Instagram</Title>    
                    </Row>
                </div>
            </Row>
            <Row className={styles.infoCompany}>
                <Link
                    className={styles.buttonDashboard}
                    link={DashboardURL().REDIRECT.BASE}
                >
                    { Texts.PRIVATE_AREA }
                </Link>
            </Row>
            <Row className={styles.infoCompany}>
                <Row className={styles.upperText}>
                    <Item>{ FANTASY_NAME }</Item>
                </Row>
                <Row className={styles.upperText}>
                    <Item>{Texts.CNPJ}: { CNPJ }</Item>
                </Row>
                <Row className={styles.upperText}>
                    <Item>{Texts.PHONE}: { PHONE }</Item>
                </Row>
                <Row className={styles.upperText}>
                    <Item>{ LOCAL }</Item>
                </Row>
            </Row>
            <Row className={styles.copyright}>
                { Texts.COPYRIGHT }
            </Row>
            <Row className={styles.copyright}>
                <span style={{ marginRight : 5 }}>{Texts.DEVELOPER}: </span>
                <Link
                    isLink
                    link={CONTACT_DEVELOPER}
                >
                    { DEVELOPER }
                </Link>
            </Row>
        </Row>
    );
}

export { Footer };
export default Footer;