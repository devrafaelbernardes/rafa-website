import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';

function EditMedia(){
    return (
        <Row className={styles.editMedia}>
            <Row>
                <Header
                    title={ Texts.EDIT_MEDIA }
                />
            </Row>
            <Row className={styles.body}>
                { Texts.EDIT_MEDIA }
            </Row>
        </Row>
    );
}

export { EditMedia };
export default EditMedia;