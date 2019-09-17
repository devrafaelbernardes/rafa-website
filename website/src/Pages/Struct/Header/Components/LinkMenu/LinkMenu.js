import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/style.module.css';

function LinkMenu({ exact, link, isLink, text }){
    exact = exact === true;
    isLink = isLink === true;

    return (
        <div className={styles.root}>
            {
                isLink ? (
                    <a 
                        className={styles.link}
                        href={link}
                    >
                        {text}
                    </a>       
                ) : (
                    <NavLink 
                        exact={exact}
                        className={styles.link}
                        activeClassName={styles.activeLink}
                        to={link}
                    >
                        {text}
                    </NavLink>
                )
            }
        </div>
    );
}

export { LinkMenu };
export default LinkMenu;