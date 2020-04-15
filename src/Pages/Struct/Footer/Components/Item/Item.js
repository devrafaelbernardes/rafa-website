import React from 'react';
import { Container } from './styles';

export function Item({ children, ...props }){
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}

export default Item;