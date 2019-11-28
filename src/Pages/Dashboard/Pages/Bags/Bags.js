import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';
import { FormUpdatePositionBags } from '../../../../GeneralComponents';

function Bags(){
    return (
        <Row className={styles.bags}>
            <Row>
                <Header
                    title={ Texts.BAGS }
                    subtitle={ Texts.DESCRIPTION_FORM_UPDATE_POSITION_BAGS }
                />
            </Row>
            <Row className={styles.body}>
                <FormUpdatePositionBags />
            </Row>
        </Row>
    );
}

export { Bags };
export default Bags;