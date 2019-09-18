import React from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import Link from '../Link/Link';

function Media({ image, link }){
    return (
        <Row className={styles.media}>
            {
                image &&
                <Link
                    isLink={link ? true : false}
                    link={link}
                    className={styles.button}
                >
                    <Row className={styles.image}>
                        <Image src={image} />
                    </Row>
                </Link>
            }
        </Row>
    );
}

export { Media };
export default Media;