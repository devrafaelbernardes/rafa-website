import React from 'react';
import { Container } from './styles';

export function Title({ children }){
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Title;