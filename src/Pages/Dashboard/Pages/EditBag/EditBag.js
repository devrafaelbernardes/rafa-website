import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';

function EditBag(){
    return (
        <Row className={styles.editBag}>
            <Row>
                <Header
                    title={ Texts.EDIT_BAG }
                />
            </Row>
            <Row className={styles.body}>
                { Texts.BAGS }
            </Row>
        </Row>
    );
}

export { EditBag };
export default EditBag;