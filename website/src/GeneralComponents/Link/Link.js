import React from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import styles from './css/style.module.css';
import { ErrorURL } from '../../Routers/URLs/ErrorURL';

function Link({ exact, link, isLink, children, className }){
    exact = ""+(exact === true);
    isLink = isLink === true;
    link = link ? link : ErrorURL().REDIRECT.BASE;

    return (
        <div className={styles.root}>
            {
                isLink ? (
                    <a 
                        className={styles.link + (className ? " " + className : "")}
                        href={link}
                    >
                        {children}
                    </a>       
                ) : (
                    <DefaultLink 
                        exact={exact}
                        className={styles.link + (className ? " " + className : "")}
                        to={link}
                    >
                        {children}
                    </DefaultLink>
                )
            }
        </div>
    );
}

export { Link };
export default Link;