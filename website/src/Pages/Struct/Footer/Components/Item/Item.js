import React from 'react';
import styles from './css/style.module.css';

function Item({ children }){
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
}

export { Item };
export default Item;