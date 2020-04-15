import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Title from './Components/Title';

import Texts from '../../StaticContent/Texts';
import Image1 from '../../Assets/Images/foto-1-about.png';
import Image2 from '../../Assets/Images/foto-2-about.png';
import Image3 from '../../Assets/Images/foto-3-about.png';

import { Container, ContainerImage, ContainerDescription, Description } from './styles';

import Image from 'GeneralComponents/Image';

export function About() {
    return (
        <Container>
            <ContainerImage>
                <Image src={Image1} />
            </ContainerImage>
            <ContainerDescription>
                <Col xs="12" sm="10" md="9" lg="9">
                    <Row>
                        <Row>
                            <Title>{Texts.WHEN_DOES}</Title>
                        </Row>
                        <Description>
                            {Texts.WHEN_DOES_DESCRIPTION}
                        </Description>
                    </Row>
                </Col>
            </ContainerDescription>
            <ContainerImage>
                <Image src={Image2} />
            </ContainerImage>
            <ContainerDescription>
                <Col xs="12" sm="10" md="9" lg="9">
                    <Description>
                        {Texts.UNIQUE_DESIGN_DESCRIPTION}
                    </Description>
                </Col>
            </ContainerDescription>
            <ContainerImage>
                <Image src={Image3} />
            </ContainerImage>
        </Container>
    );
}

export default About;