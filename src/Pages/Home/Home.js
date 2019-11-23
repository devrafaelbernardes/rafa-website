import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { ListBags, Link } from '../../GeneralComponents';
import Texts from '../../StaticContent/Texts';

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
            <Row className={styles.footer}>
                <Row className={styles.othersModels}>
                    { Texts.TO_PURCHASE_THESE_AND_OTHER_MODELS }
                </Row>
                <Row>
                    <Link
                        className={styles.clickHere}
                    >
                        { Texts.CLICK_HERE }
                    </Link>
                </Row>
            </Row>
        </Row>
    );
}

export { Home };
export default Home;