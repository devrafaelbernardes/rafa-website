import React from 'react';
import { Link as DefaultLink, NavLink } from 'react-router-dom';
import styles from './css/style.module.css';

function Link({ exact, link, isNavLink, isLink, children, className, activeClassName, onClick, style }){
    exact = (exact === true);
    isLink = isLink === true;
    link = link ? link : "#";
    onClick = onClick ? onClick : null;
    return (
        <div className={styles.root}>
            {
                isLink ? (
                    <a 
                        className={styles.link + (className ? " " + className : "")}
                        href={link}
                        onClick={onClick}
                        style={style}
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
                            onClick={onClick}
                            style={style}
                        >
                            {children}
                        </NavLink>
                    ) : (
                        <DefaultLink 
                            exact={""+exact}
                            className={styles.link + (className ? " " + className : "")}
                            to={link}
                            onClick={onClick}
                            style={style}
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