import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Menu } from './Components';
import { RouterDashboard } from '../../Routers';
import { ContextDashboard } from '../../Contexts';

function Dashboard(){
    var valueContext = {

    };
    return (
        <Row className={styles.dashboard}>
            <ContextDashboard.Provider value={valueContext}>
                <Col xs="12" sm="12" md="4" lg="3">
                    <Row className={styles.menu}>
                        <Menu />
                    </Row>
                </Col>
                <Col xs="12" sm="12" md="8" lg="9">
                    <Row className={styles.body}>
                        <RouterDashboard />
                    </Row>
                </Col>
            </ContextDashboard.Provider>
        </Row>
    );
}

export { Dashboard };
export default Dashboard;