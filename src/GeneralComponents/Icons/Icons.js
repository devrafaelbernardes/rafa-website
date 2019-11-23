import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSpinner } from '@fortawesome/free-solid-svg-icons'

export const UserIcon = (props) => (
    <Icon icon={faUser} {...props} />
);

export const LoadingIcon = (props) => (
    <Icon icon={faSpinner} {...props} />
);

export const InstagramIcon = (props) => (
    <Icon icon="fab fa-instagram" isHTML {...props} />
);

export const FacebookIcon = (props) => (
    <Icon icon="fab fa-facebook" isHTML {...props} />
);

function Icon(props) {
    var { icon, className, style, isHTML } = props;
    isHTML = isHTML === true;
    className = className ? className : "";
    if (isHTML) {
        return (<i className={icon + " " + className} style={style}></i>);
    }
    return (<FontAwesomeIcon icon={icon} {...props} />);
}