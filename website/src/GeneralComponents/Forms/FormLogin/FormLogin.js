import React, { useState } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button } from '../../';
import { Form } from '../';

function FormLogin({ textHeader }){
    var [inputs, setInputs] = useState({
        email : '',
        password : ''
    });

    const submit = () => {
        window.alert("ENVIADO");
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }

    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                <Row>
                    <Input 
                        name="email"
                        placeholder={Texts.EMAIL}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="password"
                        placeholder={Texts.PASSWORD}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Button
                        onClick={() => submit()}
                    >
                        { Texts.ENTER }
                    </Button>
                </Row>
            </Row>
        </Form>
    );
}

export { FormLogin };
export default FormLogin;