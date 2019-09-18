import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { ListMedia } from '../../GeneralComponents';
import Texts from '../../StaticContent/Texts';

function Media(){
    var [reloading /*, setReloading*/] = useState(false);
    
    /*
    const reloadPage = () => {
        setLoading(true);
        setReloading(!reloading);
    }
    */
    return (
        <Row className={styles.media}>
            <Row className={styles.header}>
                { Texts.CLICK_ON_THE_IMAGE_TO_SEE }
            </Row>
            <Row className={styles.body}>
                <ListMedia reloading={reloading} />
            </Row>
        </Row>
    );
}

export { Media };
export default Media;