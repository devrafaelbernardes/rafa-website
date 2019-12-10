import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Loading } from '../../GeneralComponents';
import { TablesAPI } from '../../Rest/TablesAPI';
import Media from '../Media/Media';
import Texts from '../../StaticContent/Texts';
import { listMedias } from '../../Rest/query';

function ListMedia({ reloading }){
    reloading = reloading === true;
    var [loading, setLoading] = useState(true);
    var [medias, setMedias] = useState(null);

    useEffect(() => {
        loadPage();
    }, [reloading]);

    const loadPage = async() => {
        await listMedias()
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
                                    let image = media.image && media.image[TablesAPI.IMAGE.LOCATION] ? media.image[TablesAPI.IMAGE.LOCATION] : null;
                                    return image && (
                                        <Col className={styles.media} xs="12" sm="6" md="6" lg="6" key={i}>
                                            <Media
                                                showButtons
                                                code={media[TablesAPI.MEDIA.CODE]}
                                                image={image}
                                                link={media[TablesAPI.MEDIA.LINK]}
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