import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { LinkMenu } from '../';
import Texts from '../../../../../StaticContent/Texts';
import { HomeURL, MediaURL, AboutURL } from '../../../../../Routers/URLs';
import { URL_STORE, URL_CONTACT, URL_WORKSHOP } from '../../../../../StaticContent/ExternalURLs';

function Menu(){
    return (
        <Row className={styles.menu}>
            <LinkMenu 
                exact
                link={HomeURL().REDIRECT.BASE}
                text={Texts.HOME}
            /> 
            <LinkMenu 
                isLink
                link={URL_STORE}
                text={Texts.ONLINE_STORE}
            /> 
            <LinkMenu 
                link={MediaURL().REDIRECT.BASE}
                text={Texts.MEDIA}
            /> 
            <LinkMenu 
                link={AboutURL().REDIRECT.BASE}
                text={Texts.ABOUT}
            /> 
            <LinkMenu 
                isLink
                link={URL_CONTACT}
                text={Texts.CONTACT}
            /> 
            <LinkMenu 
                isLink
                link={URL_WORKSHOP}
                text={Texts.WORKSHOP}
            /> 
        </Row>
    );
}

export { Menu };
export default Menu;