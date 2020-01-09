import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';
import { Header } from '../../Components';
import { FormUpdatePositionSocialNetwork } from '../../../../GeneralComponents';

export function SocialNetwork(){
    return (
        <Row className={styles.socialNetwork}>
            <Row>
                <Header
                    title={ Texts.SOCIAL_NETWORK }
                    subtitle={ Texts.DESCRIPTION_FORM_UPDATE_POSITION_SOCIAL_NETWORK }
                />
            </Row>
            <Row className={styles.body}>
                <FormUpdatePositionSocialNetwork />
            </Row>
        </Row>
    );
}

export default SocialNetwork;