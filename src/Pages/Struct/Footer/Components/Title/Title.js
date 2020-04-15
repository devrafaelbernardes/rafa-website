import React from 'react';
import { Container } from './styles';

export function Title({ children, ...props }){
    return (
        <Container {...props}>
            { children }
        </Container>
    );
}

export default Title;