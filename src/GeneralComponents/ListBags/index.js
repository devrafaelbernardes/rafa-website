import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import { Container, ContainerBag } from './styles';

import { BAG, IMAGE, PAGINATION } from 'Rest/TablesAPI';
import { GET_BAGS } from 'Rest/query';

import Bag from 'GeneralComponents/Bag';
import ComponentLoading from 'GeneralComponents/ComponentLoading';
import List from 'GeneralComponents/List';

export function ListBags({ ...props }) {
    const [bags, setBags] = useState(null);
    const { data, loading } = useQuery(GET_BAGS);

    useEffect(() => {
        let IS_MOUNTED = true;
        if (IS_MOUNTED && data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setBags(data.response[PAGINATION.ITEMS]);
        }
        return () => {
            IS_MOUNTED = false;
        };
    }, [data]);

    return (
        <Container { ...props }>
            <ComponentLoading loading={loading}>
                <List
                    items={bags}
                    renderItem={(bag, i) => {
                        const validateImage = (image) => image && image[IMAGE.URL];
                        let firstImage = validateImage(bag[BAG.FIRST_IMAGE]);
                        let secondImage = validateImage(bag[BAG.SECOND_IMAGE]);
                        let total = bag[BAG.TOTAL_PRICE];
                        let discount = bag[BAG.DISCOUNT_PRICE];
                        let deposit = bag[BAG.DEPOSIT];
                        let isRight = secondImage ? i % 2 === 0 : false;
                        let tam = secondImage ? 12 : 6;

                        return (
                            <ContainerBag xs="12" sm="12" md={tam} lg={tam} key={i}>
                                <Bag
                                    key={i}
                                    right={isRight}
                                    title={bag[BAG.NAME]}
                                    firstImage={firstImage}
                                    secondImage={secondImage}
                                    total={total}
                                    discount={discount}
                                    deposit={deposit}
                                    installments={bag[BAG.INSTALLMENTS]}
                                    installmentsPrice={bag[BAG.INSTALLMENTS_PRICE]}
                                    link={bag[BAG.LINK]}
                                />
                            </ContainerBag>
                        );
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}

export default ListBags;