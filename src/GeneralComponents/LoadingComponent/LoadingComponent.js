import React from 'react';
import styles from './css/style.module.css';
import { Row } from 'react-bootstrap';
import { Loading } from '../';

function LoadingComponent({ loading, children }){
    loading = loading === true;
    children = children ? children : "";
    return (
        <Row className={styles.root}>
            { loading ? <Loading /> : children }
        </Row>
    );
}

export { LoadingComponent };
export default LoadingComponent;