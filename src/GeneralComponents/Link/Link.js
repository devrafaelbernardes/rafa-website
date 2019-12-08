import React from 'react';
import { Link as DefaultLink, NavLink } from 'react-router-dom';
import styles from './css/style.module.css';

function Link({ exact, button, link, isNavLink, isLink, children, className, activeClassName, onClick, style }){
    exact = (exact === true);
    isLink = isLink === true;
    button = button === true;
    link = link ? link : "#";
    onClick = onClick ? onClick : null;
    let classes = (className ? " "+className : "") + (button ? " " + styles.button : "");
    return (
        <div className={styles.root}>
            {
                isLink ? (
                    <a 
                        className={styles.link + classes}
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
                            className={styles.link + classes}
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
                            className={styles.link + classes}
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