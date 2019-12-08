import React, { useState, useContext, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button } from '../../';
import { Form } from '../';
import { ContextApp } from '../../../Contexts';
import { TablesAPI } from '../../../Rest/TablesAPI';
import { validateLogin } from '../../../Rest/mutation';

function FormLogin({ textHeader }){
    var [inputs, setInputs] = useState({
        email : '',
        senha : ''
    });
    var [result, setResult] = useState('');
    var { doLogin } = useContext(ContextApp);

    useEffect(() => {
        let IS_MOUNTED = true;

        if(result !== ''){
            const timeout = setTimeout(() => {
                if(IS_MOUNTED){
                    setResult('');
                }
            }, 1500);

            return () => {
                IS_MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    });

    const submit = async() => {
        var { email, senha } = inputs;
        let OKEY = false;
        try {
            await validateLogin(email, senha)
                .then(response => {
                    if(response && response.data && response.data.response && doLogin){
                        var { token } = response.data.response;
                        if(token && token[TablesAPI.TOKEN_ACCESS.TOKEN]){
                            OKEY = true;
                            doLogin(token[TablesAPI.TOKEN_ACCESS.TOKEN]);
                        }
                    }
                })
                .catch(e => {});
            if(OKEY){
                return;
            }
        } catch (error) {}

        await setResult(OKEY);
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
                {
                    result === false && 
                    <Row>{Texts.ERROR}</Row>
                }
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