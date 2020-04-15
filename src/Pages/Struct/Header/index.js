import React from 'react';
import { Image } from 'react-bootstrap';

import Menu from './Components/Menu';
import { Container, ContainerMenu, ContainerLogo } from './styles';

import ImageLogo from 'Assets/Images/logo.png';

export function Header(){
    return (
        <Container>
            <ContainerLogo>
                <Image src={ImageLogo} />
            </ContainerLogo>
            <ContainerMenu>
                <Menu />
            </ContainerMenu>
        </Container>
    );
}

export default Header;