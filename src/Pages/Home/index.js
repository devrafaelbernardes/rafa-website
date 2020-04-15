import React from 'react';
import { Row } from 'react-bootstrap';

import { Container, General, Footer, FooterLink, OtherModels } from './styles';

import Texts from 'StaticContent/Texts';
import ListBags from 'GeneralComponents/ListBags';

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
                        <FooterLink>
                            {Texts.CLICK_HERE}
                        </FooterLink>
                    </Row>
                </Footer>
            </General>
        </Container>
    );
}

export default Home;