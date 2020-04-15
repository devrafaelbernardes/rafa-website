import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import { Container, ContainerMedia, Media } from './styles';

import { MEDIA, IMAGE, PAGINATION } from 'Rest/TablesAPI';
import { GET_MEDIAS } from 'Rest/query';

import ComponentLoading from 'GeneralComponents/ComponentLoading';
import List from 'GeneralComponents/List';

export function ListMedia({ ...props }) {
    var [medias, setMedias] = useState(null);
    const { data, loading } = useQuery(GET_MEDIAS);

    useEffect(() => {
        let IS_MOUNTED = true;
        if (IS_MOUNTED && data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setMedias(data.response[PAGINATION.ITEMS]);
        }
        return () => {
            IS_MOUNTED = false;
        };
    }, [data]);

    return (
        <Container { ...props }>
            <ComponentLoading loading={loading}>
                <List
                    items={medias}
                    renderItem={(media, i) => {
                        const image = media[MEDIA.IMAGE] && media[MEDIA.IMAGE][IMAGE.URL];
                        return image && (
                            <ContainerMedia xs="12" sm="6" md="6" lg="6" key={i}>
                                <Media
                                    image={image}
                                    link={media[MEDIA.LINK]}
                                />
                            </ContainerMedia>
                        );
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}

export default ListMedia;