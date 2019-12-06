import React from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import { Button } from '../';

function InputFile(props) {
    let { disabled, children, onChange, name, placeholder } = props;
    disabled = disabled === true;
    const nameInput = "input-file"+name;
    return (
        <Row className={styles.root + (disabled ? " " + styles.disabled : "")}>
            <Row>
                <Button
                    onClick={() => document.getElementById(nameInput).click()}
                >
                    { children }
                </Button>
            </Row>
            <Row className={styles.divInput}>
                <input
                    onChange={onChange}
                    id={nameInput}
                    type={"file"}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </Row>
        </Row>
    );
}

export { InputFile };
export default InputFile;