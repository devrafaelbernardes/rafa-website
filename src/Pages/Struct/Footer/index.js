import React from 'react';
import { Row } from 'react-bootstrap';

import { Container, Copyright, DeveloperLink, SocialNetworks, InfoCompanyContainer, InfoCompany, SocialNetwork, ContainerSocialNetwork } from './styles';

import { Item, Title } from './Components';
import { FANTASY_NAME, DEVELOPER, CONTACT_DEVELOPER, LOCAL, CNPJ, PHONE, CONTACT_FACEBOOK, CONTACT_INSTAGRAM } from 'StaticContent/InfoSite';

import { FacebookIcon, InstagramIcon } from 'GeneralComponents/Icons';


import Texts from 'StaticContent/Texts';
import { URL_DASHBOARD } from 'StaticContent/ExternalURLs';
import { ButtonOutlined } from 'GeneralComponents/Button';

export function Footer() {
    return (
        <Container>
            <SocialNetworks>
                <div>
                    <ContainerSocialNetwork>
                        <SocialNetwork
                            href={CONTACT_FACEBOOK}
                        >
                            <Row>
                                <span>
                                    <FacebookIcon />
                                </span>
                                <span style={{ marginLeft: 5 }}>
                                    <Title>Facebook</Title>
                                </span>
                            </Row>
                        </SocialNetwork>
                    </ContainerSocialNetwork>
                </div>
                <div>
                    <ContainerSocialNetwork>
                        <SocialNetwork
                            href={CONTACT_INSTAGRAM}
                        >
                            <Row>
                                <span>
                                    <InstagramIcon />
                                </span>
                                <span style={{ marginLeft: 5 }}>
                                    <Title>Instagram</Title>
                                </span>
                            </Row>
                        </SocialNetwork>
                    </ContainerSocialNetwork>
                </div>
            </SocialNetworks>
            <InfoCompanyContainer>
                <InfoCompany>
                    <Item>{FANTASY_NAME} | {Texts.CNPJ} {CNPJ}</Item>
                </InfoCompany>
                <InfoCompany>
                    <Item>{Texts.PHONE}: {PHONE}</Item>
                </InfoCompany>
                <InfoCompany>
                    <Item>{LOCAL}</Item>
                </InfoCompany>
            </InfoCompanyContainer>
            <InfoCompanyContainer>
                <ButtonOutlined
                    href={URL_DASHBOARD}
                >
                    {Texts.PRIVATE_AREA}
                </ButtonOutlined>
            </InfoCompanyContainer>
            <Copyright>
                {Texts.COPYRIGHT}
            </Copyright>
            <Copyright>
                <span style={{ marginRight: 5 }}>{Texts.DEVELOPER}: </span>
                <DeveloperLink
                    href={CONTACT_DEVELOPER}
                >
                    {DEVELOPER}
                </DeveloperLink>
            </Copyright>
        </Container>
    );
}

export default Footer;