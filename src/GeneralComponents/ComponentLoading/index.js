import React from 'react';

import { Container } from './styles';

import Loading from 'GeneralComponents/Loading';

export function ComponentLoading({ children, loading = false, color = null, ...props }) {
    return (
        <Container {...props}>
            {loading ? (<Loading color={color} />) : (children)}
        </Container>
    );
}

export default ComponentLoading;