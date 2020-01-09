import React, { useContext, useState, useEffect } from 'react';
import { Row, Image } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Link, Button } from '..';
import { ContextApp } from '../../Contexts';
import { removeSocialNetwork } from '../../Rest/mutation';
import Texts from '../../StaticContent/Texts';

export function SocialNetwork({ showButtons, image, link, code }){
    var [resultRemove, setResultRemove] = useState('');
    var { authenticated, reloadPage } = useContext(ContextApp);
    authenticated = authenticated === true;
    showButtons = showButtons === true;

    useEffect(() => {
        if(resultRemove !== ''){
            if(resultRemove === true && reloadPage){
                reloadPage();
                return;
            }
            const timeout = setTimeout(() => {
                setResultRemove('');
            }, 1500);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [resultRemove, reloadPage]);

    const submitRemove = async() => {
        let OKEY = false;
        if(code){
            try {
                await removeSocialNetwork(code)
                    .then(response => {
                        OKEY = response && response.data && response.data.response;
                    })
            } catch (error) {}
        }
        await setResultRemove(OKEY);
    }

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
        <Row className={styles.social_network}>
            {
                image &&
                <Body>
                    <Row className={styles.image}>
                        <Image src={image} />
                    </Row>
                </Body>
            }
            {
                showButtons && code && authenticated &&
                <Row>
                    {
                        resultRemove === false &&
                        <Row style={{ color : 'red', fontSize : 14 }}>{Texts.ERROR}</Row>
                    }
                    <Row className={styles.buttons}>
                        <Button
                            onClick={() => submitRemove()}
                        >
                            { Texts.REMOVE }
                        </Button>
                    </Row>
                </Row>
            }
        </Row>
    );
}

export default SocialNetwork;