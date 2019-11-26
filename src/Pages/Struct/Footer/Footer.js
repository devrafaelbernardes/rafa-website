import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Item, Title } from './Components';
import { FANTASY_NAME, DEVELOPER, CONTACT_DEVELOPER, LOCAL, CNPJ, PHONE, CONTACT_FACEBOOK, CONTACT_INSTAGRAM } from '../../../StaticContent/InfoSite';
import { Link, FacebookIcon, InstagramIcon } from '../../../GeneralComponents';
import Texts from '../../../StaticContent/Texts';
import { DashboardURL } from '../../../Routers/URLs';
import { ContextApp } from '../../../Contexts';

function Footer(){
    var { authenticated } = useContext(ContextApp);

    return ( 
        <Row className={styles.footer}>
            <Row className={styles.upperText + " " + styles.network}>
                <div>
                    <Row className={styles.icons + " " + styles.alignRight}>
                        <Link
                            isLink
                            className={styles.linkIcon}
                            link={CONTACT_FACEBOOK}
                        >
                            <Row>
                                <span>
                                    <FacebookIcon /> 
                                </span>
                                <span style={{ marginLeft : 5 }}>
                                    <Title>Facebook</Title>
                                </span> 
                            </Row>                           
                        </Link>
                    </Row>
                </div>
                <div>
                    <Row className={styles.icons}>
                        <Link
                            isLink
                            className={styles.linkIcon}
                            link={CONTACT_INSTAGRAM}
                        >
                            <Row>
                                <span>
                                    <InstagramIcon />
                                </span>
                                <span style={{ marginLeft : 5 }}>
                                    <Title>Instagram</Title>
                                </span> 
                            </Row>
                        </Link>
                    </Row>
                </div>
            </Row>
            <Row className={styles.infoCompany}>
                <Row className={styles.upperText}>
                    <Item>{ FANTASY_NAME } | {Texts.CNPJ} { CNPJ }</Item>
                </Row>
                <Row className={styles.upperText}>
                    <Item>{Texts.PHONE}: { PHONE }</Item>
                </Row>
                <Row className={styles.upperText}>
                    <Item>{ LOCAL }</Item>
                </Row>
            </Row>
            {
                !authenticated &&
                <Row className={styles.infoCompany}>
                    <Link
                        className={styles.buttonDashboard}
                        link={DashboardURL().REDIRECT.BASE}
                    >
                        { Texts.PRIVATE_AREA }
                    </Link>
                </Row>
            }
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