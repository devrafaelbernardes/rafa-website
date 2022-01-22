import { ButtonOutlined } from 'GeneralComponents/Button';
import React from 'react';
import { URL_DASHBOARD } from 'StaticContent/ExternalURLs';
import { CONTACT_DEVELOPER, DEVELOPER } from 'StaticContent/InfoSite';
import Texts from 'StaticContent/Texts';
import { Container, Copyright, DeveloperLink, InfoCompanyContainer } from './styles';

export function Footer() {
    return (
        <Container>
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