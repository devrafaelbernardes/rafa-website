import React from 'react';

import { Container, Body, Header } from './styles';

import ListMedia from 'GeneralComponents/ListMedia';
import Texts from 'StaticContent/Texts';

export function Media(){
    return (
        <Container>
            <Header>
                { Texts.CLICK_ON_THE_IMAGE_TO_SEE }
            </Header>
            <Body>
                <ListMedia />
            </Body>
        </Container>
    );
}

export default Media;