import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { ListSocialNetwork } from '../../GeneralComponents';

export function SocialNetwork(){
    var [reloading /*, setReloading*/] = useState(false);
    
    /*
    const reloadPage = () => {
        setLoading(true);
        setReloading(!reloading);
    }
    */
    return (
        <Row className={styles.social_network}>
            <ListSocialNetwork
                className={styles.list}
                reloading={reloading}
            />
        </Row>
    );
}

export default SocialNetwork;