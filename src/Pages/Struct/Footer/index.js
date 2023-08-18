import { CONTACT_DEVELOPER, DEVELOPER } from 'StaticContent/InfoSite';
import Texts from 'StaticContent/Texts';
import { Container, Copyright, DeveloperLink, InfoCompanyContainer } from './styles';

export function Footer() {
    return (
        <Container>
            <InfoCompanyContainer>
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