import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import { Container, ContainerSocialNetwork, SocialNetwork } from './styles';

import { IMAGE, SOCIAL_NETWORK, PAGINATION } from 'Rest/TablesAPI';
import { GET_SOCIAL_NETWORKS } from 'Rest/query';

import List from 'GeneralComponents/List';
import ComponentLoading from 'GeneralComponents/ComponentLoading';

export function ListSocialNetwork({ ...props }) {
    const [socialNetworks, setSocialNetworks] = useState(null);
    const { data, loading } = useQuery(GET_SOCIAL_NETWORKS);

    useEffect(() => {
        let IS_MOUNTED = true;
        if (IS_MOUNTED && data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setSocialNetworks(data.response[PAGINATION.ITEMS]);
        }
        return () => {
            IS_MOUNTED = false;
        };
    }, [data]);

    return (
        <Container { ...props }>
            <ComponentLoading loading={loading}>
                <List
                    items={socialNetworks}
                    renderItem={(socialNetwork, i) => {
                        if (socialNetwork) {
                            let image = socialNetwork.image && socialNetwork.image[IMAGE.URL];
                            return image && (
                                <ContainerSocialNetwork xs="12" sm="6" md="4" lg="4" key={i}>
                                    <SocialNetwork
                                        image={image}
                                        link={socialNetwork[SOCIAL_NETWORK.LINK]}
                                    />
                                </ContainerSocialNetwork>
                            );
                        }
                        return "";
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}

export default ListSocialNetwork;