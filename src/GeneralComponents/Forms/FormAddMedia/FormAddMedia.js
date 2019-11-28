import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Image } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button, InputFile } from '../..';
import { Form, Result } from '..';
import { addMedia } from '../../../Rest/Functions';

function FormAddMedia({ textHeader }){
    var [inputs, setInputs] = useState({
        link : '',
    });
    var [image, setImage] = useState('');
    var [imagePreview, setImagePreview] = useState(null);
    var [result, setResult] = useState('');
    var [/*media*/ , setMedia] = useState(null);

    useEffect(() => {
        if(result !== ''){
            const timeout = setTimeout(() => {
                setResult('');
            }, 1500);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const submit = async() => {
        var { link } = inputs;
        var OKEY = false;

        try {
            await addMedia(link, image)
            .then(
                response => {
                    if(response && response.status && response.media){
                        OKEY = response.status;
                        setMedia(response.media);
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
        try {
            var image = e.target.files[0];
            if(image){
                setImagePreview(URL.createObjectURL(image));
                setImage(image);
            }    
        } catch (error) {}
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
                    <InputFile
                        name="image"
                        onChange={changeInputImage}
                    >
                        { Texts.ADD_IMAGE }
                    </InputFile>
                </Row>
                {
                    result !== '' &&
                    <Result result={result}>
                        {result === true ? Texts.SUCCESS : Texts.ANY_ERROR }
                    </Result>
                }
                <Row>
                    <Button
                        onClick={() => submit()}
                    >
                        { Texts.SAVE }
                    </Button>
                </Row>
            </Row>
        </Form>
    );
}

export { FormAddMedia };
export default FormAddMedia;