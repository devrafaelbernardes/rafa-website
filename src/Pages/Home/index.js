import ListBags from 'GeneralComponents/ListBags';
import React from 'react';
import { Row } from 'react-bootstrap';
import { URL_STORE } from 'StaticContent/ExternalURLs';
import Texts from 'StaticContent/Texts';
import { Container, Footer, FooterLink, General, OtherModels } from './styles';



export function Home() {
    return (
        <Container>
            <General>
                <Row>
                    <ListBags />
                </Row>
                <Footer>
                    <OtherModels>
                        {Texts.TO_PURCHASE_THESE_AND_OTHER_MODELS}
                    </OtherModels>
                    <Row>
                        <FooterLink
                            href={URL_STORE}
                        >
                            {Texts.CLICK_HERE}
                        </FooterLink>
                    </Row>
                </Footer>
            </General>
        </Container>
    );
}

export default Home;