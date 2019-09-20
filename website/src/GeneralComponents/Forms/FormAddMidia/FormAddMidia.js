import React, { useState } from 'react';
import styles from './css/style.module.css';
import { Row, Image } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button } from '../..';
import { Form } from '..';
import { addMidia } from '../../../Rest/Functions';

function FormAddMidia({ textHeader }){
    var [inputs, setInputs] = useState({
        link : '',
    });
    var [image, setImage] = useState('');
    var [imagePreview, setImagePreview] = useState(null);
    var [result, setResult] = useState('');
    var [midia, setMidia] = useState(null);

    const submit = async() => {
        var { link } = inputs;
        var OKEY = false;

        try {
            await addMidia(link, image)
            .then(
                response => {
                    if(response && response.status && response.midia){
                        OKEY = response.status;
                        setMidia(response.midia);
                    }
                }
            )
        } catch (error) {}

        await setResultForm(OKEY);
    }

    const changeInput = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
    }

    const changeInputImage = (e) => {
        var image = e.target.files[0];
        if(image){
            setImagePreview(URL.createObjectURL(image));
            setImage(image);
        }
    }

    const setResultForm = (result) => {
        setResult(result);
    }

    return (
        <Form
            textHeader={textHeader}
        >
            <Row className={styles.root}>
                {
                    imagePreview &&
                    <Image src={imagePreview} style={{ width : "300px" }} />
                }
                <Row>
                    <Input 
                        name="link"
                        placeholder={"Link imagem"}
                        onChange={changeInput}
                    />
                </Row>
                <Row>
                    <Input 
                        name="image"
                        type="file"
                        onChange={changeInputImage}
                    />
                </Row>
                {
                    result !== '' &&
                    <Row>
                        { result === true ? ("SUCESSO") : ("ERRO AO ADICIONAR") }
                    </Row>
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

export { FormAddMidia };
export default FormAddMidia;