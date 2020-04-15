import React from 'react';
import { Container } from './styles';

export function Body({ children, ...props }){
    return (
        <Container {...props}>
            { children }
        </Container>
    );
}

export default Body;