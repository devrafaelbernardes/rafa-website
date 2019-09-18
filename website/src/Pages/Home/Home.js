import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { ListBags } from '../../GeneralComponents';

function Home(){
    var [reloading /*, setReloading*/] = useState(false);
    
    /*
    const reloadPage = () => {
        setLoading(true);
        setReloading(!reloading);
    }
    */
    return (
        <Row className={styles.home}>
            <Row>
                <ListBags reloading={reloading} />
            </Row>
        </Row>
    );
}

export { Home };
export default Home;