import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { FormLogin } from '../../GeneralComponents'

function Login(){
    return (
        <Row className={styles.login}>
            <Col xs="12" sm="10" md="5" lg="5">
                <FormLogin 
                    textHeader="Login"
                />
            </Col>
        </Row>
    );
}

export { Login };
export default Login;