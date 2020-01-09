import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Loading, SocialNetwork } from '..';
import { TablesAPI } from '../../Rest/TablesAPI';
import Texts from '../../StaticContent/Texts';
import { listSocialNetworks } from '../../Rest/query';

export function ListSocialNetwork({ reloading }){
    reloading = reloading === true;
    var [loading, setLoading] = useState(true);
    var [socialNetworks, setSocialNetworks] = useState(null);

    useEffect(() => {
        loadPage();
    }, [reloading]);

    const loadPage = async() => {
        await listSocialNetworks()
        .then(response => {
            if(response && response.data && response.data.response){
                setSocialNetworks(response.data.response);
            }
        });
        await setLoading(false);
    }
    
    return (
        <Row className={styles.root}>
            <Row>
            {
                loading ? (
                    <Loading />
                ) : (
                    socialNetworks && socialNetworks.length > 0 ? (
                        socialNetworks.map(
                            (socialNetwork, i) => {
                                if(socialNetwork){
                                    let image = socialNetwork.image && socialNetwork.image[TablesAPI.IMAGE.LOCATION] ? socialNetwork.image[TablesAPI.IMAGE.LOCATION] : null;
                                    return image && (
                                        <Col className={styles.social_network} xs="12" sm="6" md="4" lg="4" key={i}>
                                            <SocialNetwork
                                                showButtons
                                                code={socialNetwork[TablesAPI.SOCIAL_NETWORK.CODE]}
                                                image={image}
                                                link={socialNetwork[TablesAPI.SOCIAL_NETWORK.LINK]}
                                            />
                                        </Col>
                                    );
                                }
                                return "";
                            }
                        )
                    ) : (
                        <Row className={styles.no_item}>{Texts.NO_SOCIAL_NETWORK}</Row>
                    )
                )
            }
            </Row>
        </Row>
    );
}

export default ListSocialNetwork;