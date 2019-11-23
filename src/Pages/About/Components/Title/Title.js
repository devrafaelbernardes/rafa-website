import React from 'react';
import styles from './css/style.module.css';

function Title({ children }){
    return (
        <div className={styles.title}>
            { children }
        </div>
    );
}

export { Title };
export default Title;