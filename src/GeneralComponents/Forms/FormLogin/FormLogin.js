import React, { useState, useContext } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button } from '../../';
import { Form } from '../';
import { validateLogin } from '../../../Rest/Functions';
import { ContextApp } from '../../../Contexts';
import { TablesAPI } from '../../../Rest/TablesAPI';

function FormLogin({ textHeader }){
    var [inputs, setInputs] = useState({
        email : '',
        senha : ''
    });

    var { doLogin } = useContext(ContextApp);

    const submit = async() => {
        var { email, senha } = inputs;

        try {
            await validateLogin(email, senha)
                .then(
                    response => {
                        if(response && response.data && response.data.response && doLogin){
                            var { token } = response.data.response;
                            if(token && token[TablesAPI.TOKEN_ACCESS.TOKEN]){
                                doLogin(token[TablesAPI.TOKEN_ACCESS.TOKEN]);
                            }
                        }
                    }
                )
                .catch(e => {});
        } catch (error) {}
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
                        name="senha"
                        type="password"
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