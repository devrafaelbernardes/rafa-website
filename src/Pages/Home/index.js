import ListMedia from 'GeneralComponents/ListMedia';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Container, Footer, General } from './styles';

export function Home() {
    return (
        <Container>
            <General>
                <Row>
                    <ListMedia isLandingPage />
                </Row>
                <Footer />
            </General>
        </Container>
    );
}

export default Home;