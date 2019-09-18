import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Title } from './Components';
import styles from './css/style.module.css';
import Texts from '../../StaticContent/Texts';
import RafaImage from '../../Assets/Images/rafa.png';
import Image1 from '../../Assets/Images/foto-1-about.png';
import Image2 from '../../Assets/Images/foto-2-about.png';
import Image3 from '../../Assets/Images/foto-3-about.png';

function About(){
    return (
        <Row className={styles.about}>
            <Row className={styles.header}>
                <Col className={styles.boxImage} xs="12" sm="12" md="4" lg="4">
                    <Image src={RafaImage} />
                </Col>
                <Col xs="12" sm="12" md="8" lg="8">
                    <Row>
                        <Row>
                            <Title>{ Texts.WHEN_I }</Title>
                        </Row>
                        <Row className={styles.whenIDescription}>
                            { Texts.WHEN_I_DESCRIPTION }
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className={styles.body}>
                <Row className={styles.images}>
                    <Image src={Image1} />
                </Row>
                <Row className={styles.description}>
                    <Col xs="12" sm="10" md="9" lg="9">
                        <Row>
                            <Row>
                                <Title>{ Texts.WHEN_DOES }</Title>
                            </Row>
                            <Row className={styles.textDescription}>
                                { Texts.WHEN_DOES_DESCRIPTION }
                            </Row>
                        </Row>
                    </Col>
                </Row>
                <Row className={styles.images}>
                    <Image src={Image2} />
                </Row>
                <Row className={styles.description}>
                    <Col xs="12" sm="10" md="9" lg="9">
                        <Row className={styles.textDescription}>
                            { Texts.UNIQUE_DESIGN_DESCRIPTION }
                        </Row>
                    </Col>
                </Row>
                <Row className={styles.images}>
                    <Image src={Image3} />
                </Row>
            </Row>
        </Row>
    );
}

export { About };
export default About;