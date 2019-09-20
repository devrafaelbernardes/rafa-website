import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Loading } from '..';
import { listaMidias } from '../../Rest/Functions';
import { TablesAPI } from '../../Rest/TablesAPI';
import Media from '../Media/Media';
import Texts from '../../StaticContent/Texts';

function ListMedia({ reloading }){
    reloading = reloading === true;
    var [loading, setLoading] = useState(true);
    var [medias, setMedias] = useState(null);

    useEffect(() => {
        loadPage();
    }, [reloading]);

    const loadPage = async() => {
        await listaMidias()
        .then(response => {
            if(response && response.data && response.data.response){
                setMedias(response.data.response);
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
                    medias && medias.length > 0 ? (
                        medias.map(
                            (media, i) => {
                                if(media){
                                    var imagem = media.imagem && media.imagem[TablesAPI.IMAGEM.CAMINHO] ? media.imagem[TablesAPI.IMAGEM.CAMINHO] : null;
                                    return imagem && (
                                        <Col className={styles.media} xs="12" sm="6" md="4" lg="4" key={i}>
                                            <Media
                                                image={imagem}
                                                link={media[TablesAPI.MIDIA.LINK]}
                                            />
                                        </Col>
                                    );
                                }
                                return "";
                            }
                        )
                    ) : (
                        <Row className={styles.no_item}>{Texts.NO_MEDIA}</Row>
                    )
                )
            }
            </Row>
        </Row>
    );
}

export { ListMedia };
export default ListMedia;