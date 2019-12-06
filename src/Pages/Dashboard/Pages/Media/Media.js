import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import Texts from '../../../../StaticContent/Texts';
import { Header } from '../../Components';
import { FormUpdatePositionMedia } from '../../../../GeneralComponents';

function Media(){
    return (
        <Row className={styles.media}>
            <Row>
                <Header
                    title={ Texts.MEDIA }
                    subtitle={ Texts.DESCRIPTION_FORM_UPDATE_POSITION_MEDIAS }
                />
            </Row>
            <Row className={styles.body}>
                <FormUpdatePositionMedia />
            </Row>
        </Row>
    );
}

export { Media };
export default Media;