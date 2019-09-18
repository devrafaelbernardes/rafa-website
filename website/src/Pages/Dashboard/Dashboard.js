import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './css/style.module.css';
import { RouterDashboard } from '../../Routers';
import { ContextDashboard } from '../../Contexts';

function Dashboard(){
    var valueContext = {

    };
    return (
        <ContextDashboard.Provider value={valueContext}>
            <Row className={styles.dashboard}>
                <RouterDashboard />
            </Row>
        </ContextDashboard.Provider>
    );
}

export { Dashboard };
export default Dashboard;