import React from 'react';
import { Link as DefaultLink, NavLink } from 'react-router-dom';
import styles from './css/style.module.css';
import { ErrorURL } from '../../Routers/URLs/ErrorURL';

function Link({ exact, link, isNavLink, isLink, children, className, activeClassName }){
    exact = (exact === true);
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
                    isNavLink ? (
                        <NavLink 
                            exact={exact}
                            className={styles.link + (className ? " " + className : "")}
                            activeClassName={styles.activeLink + (activeClassName ? " " + activeClassName : "")}
                            to={link}
                        >
                            {children}
                        </NavLink>
                    ) : (
                        <DefaultLink 
                            exact={""+exact}
                            className={styles.link + (className ? " " + className : "")}
                            to={link}
                        >
                            {children}
                        </DefaultLink>
                    )
                )
            }
        </div>
    );
}

export { Link };
export default Link;