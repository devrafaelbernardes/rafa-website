import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';
import { Header } from '../../Components';
import { FormAddMidia } from '../../../../GeneralComponents';

function Media(){
    return (
        <Row className={styles.media}>
            <Row>
                <Header
                    title={ Texts.MEDIA }
                />
            </Row>
            <Row className={styles.body}>
                <FormAddMidia 
                    textHeader="Adicionar Midia"
                />
            </Row>
        </Row>
    );
}

export { Media };
export default Media;