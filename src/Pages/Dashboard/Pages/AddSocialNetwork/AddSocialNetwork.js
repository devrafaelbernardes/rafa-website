import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';
import { Header } from '../../Components';
import { FormAddSocialNetwork } from '../../../../GeneralComponents';

export function AddSocialNetwork(){
    return (
        <Row className={styles.addSocialNetwork}>
            <Row>
                <Header
                    title={ Texts.ADD_SOCIAL_NETWORK }
                />
            </Row>
            <Row className={styles.body}>
                <FormAddSocialNetwork />
            </Row>
        </Row>
    );
}

export default AddSocialNetwork;