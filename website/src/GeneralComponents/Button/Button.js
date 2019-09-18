import React, { } from 'react';
import styles from './css/style.module.css';

function Button(props){
    var { className, children } = props;
    return (
        <button
            className={styles.button + (className ? " " + className : "")}
            {...props}
        >
            { children }
        </button>
    );
}

export { Button };
export default Button;