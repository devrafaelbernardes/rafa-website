import React from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';

function Media({ image, link }){
    const Body = ({ children }) => {
        if(link){
            return (
                <Link
                    isLink={true}
                    link={link}
                    className={styles.button}
                >
                    { children }
                </Link>
            );
        }
        return <>{children}</>;
    }
    return (
        <Row className={styles.media}>
            {
                image &&
                <Body>
                    <Row className={styles.image}>
                        <Image src={image} />
                    </Row>
                </Body>
            }
        </Row>
    );
}

export { Media };
export default Media;