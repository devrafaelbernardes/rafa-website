import React, { useState } from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';

function Input({ onChange, label, title, message, colorMessage, icon, iconRight, name, value, placeholder, type, disabled }) {
    var [valueState, setValueState] = useState("");

    disabled = disabled === true;
    value = value ? value : valueState;
    name = name ? name : "";
    type = type ? type : "text";
    placeholder = placeholder ? placeholder : "";
    colorMessage = colorMessage ? colorMessage : "inherit"; 

    const setValue = (e) => {
        if (onChange) {
            onChange(e);
        }
        setValueState(e.target.value);
    }

    return (
        <Row>
            {
                title &&
                <Row className={styles.title}>
                    { title }
                </Row>
            }
            <Row className={styles.root + (disabled ? " " + styles.disabled : "")}>
                {
                    icon &&
                    <div className={styles.iconLeft}>{icon}</div>
                }
                <div className={styles.divInput}>
                    <input
                        className={styles.input + (disabled ? " " + styles.disabled : "")}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={label || placeholder}
                        onChange={setValue}
                        disabled={disabled}
                    />
                </div>
                {
                    iconRight &&
                    <div className={styles.iconRight}>{iconRight}</div>
                }
            </Row>
            {
                message &&
                <Row className={styles.message} style={{ color : colorMessage }}>
                    { message }
                </Row>
            }
        </Row>
    );
}

export { Input };
export default Input;