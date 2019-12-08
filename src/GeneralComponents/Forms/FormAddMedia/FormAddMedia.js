import React, { useState, useEffect } from 'react';
import styles from './css/style.module.css';
import { Row, Image } from 'react-bootstrap';
import Texts from '../../../StaticContent/Texts';
import { Input, Button, InputFile } from '../..';
import { Form, Result } from '..';
import { useMutation } from 'react-apollo';
import mutation, { ADD_MEDIA } from '../../../Rest/mutation';
import { getToken } from '../../../Storage/Session';

function FormAddMedia({ textHeader }){
    var [inputs, setInputs] = useState({
        link : '',
    });
    var [image, setImage] = useState('');
    var [imagePreview, setImagePreview] = useState(null);
    var [result, setResult] = useState('');
    var [reset, setReset] = useState(false);
    var [addMedia, { data, error }] = useMutation(ADD_MEDIA);
    var { link } = inputs;

    useEffect(() => {
        if(result !== ''){
            const timeout = setTimeout(() => {
                setResult('');
                setReset(false);
            }, 1500);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [result]);

    useEffect(() => {
        if(data || error){
            let result_submit = data && data.response ? true : false;
            setResult(result_submit);
            if(result_submit === true){
                setImage(null);
                setImagePreview(null);
                setInputs({
                    link : '',
                });
                setReset(true);
            }
        }
    }, [data, error]);

    const submit = async() => {
        try {
            await addMedia(mutation({ token : getToken(), link }, { image }));
        } catch (error) {}
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
            }else{
                setImagePreview(null);
                setImage(null);
            }
        } catch (error) {}
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
                        required
                        title={Texts.LINK_MEDIA}
                        name="link"
                        placeholder={"Link imagem"}
                        onChange={changeInput}
                        reset={reset}
                    />
                </Row>
                <Row>
                    <InputFile
                        name="image"
                        onChange={changeInputImage}
                    >
                        { image ? Texts.CHANGE_IMAGE : Texts.ADD_IMAGE }
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