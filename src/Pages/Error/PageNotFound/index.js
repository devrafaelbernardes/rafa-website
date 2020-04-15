import React from 'react';

import LogoImg from 'Assets/Images/logo.png';

import { Container, Header, HeaderImage, Title, BitTitle, Body, ButtonHome, ContainerButton } from './styles';
import Texts from 'StaticContent/Texts';
import { HomeURL } from 'Routers/URLs';

export function PageNotFound() {
    const TEXTS = Texts.PAGE_NOT_FOUND;
    return (
        <Container>
            <Header>
                <HeaderImage
                    src={LogoImg}
                />
            </Header>
            <Body>
                <BitTitle>
                    {TEXTS.OOPS}
                </BitTitle>
                <Title>
                    {TEXTS.TITLE}
                </Title>
                <ContainerButton>
                    <ButtonHome
                        to={HomeURL().REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_HOME}
                    </ButtonHome>
                </ContainerButton>
            </Body>
        </Container>
    );
}
export default PageNotFound;