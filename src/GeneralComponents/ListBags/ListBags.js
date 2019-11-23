import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Bag, Loading } from '../../GeneralComponents';
import { toDecimal } from '../../StaticContent/Functions';
import { listBags } from '../../Rest/Functions';
import { TablesAPI } from '../../Rest/TablesAPI';
import Texts from '../../StaticContent/Texts';

function ListBags({ reloading }){
    reloading = reloading === true;
    var [loading, setLoading] = useState(true);
    var [bags, setBags] = useState(null);

    useEffect(() => {
        loadPage();
    }, [reloading]);

    const loadPage = async() => {
        await listBags()
        .then(response => {
            if(response && response.data && response.data.response){
                setBags(response.data.response);
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
                    bags && bags.length > 0 ? (
                        bags.map(
                            (bag, i) => {
                                const validatePrice = (p) => p && p > 0 ? toDecimal(p) : null;

                                let image = bag.images && bag.images.length > 0 ? bag.images[0][TablesAPI.IMAGE.LOCATION] : null;
                                let total = bag[TablesAPI.BAG.TOTAL_PRICE];
                                let discount = null;
                                if(bag[TablesAPI.BAG.DISCOUNT_PRICE] < bag[TablesAPI.BAG.TOTAL_PRICE]){
                                    total = bag[TablesAPI.BAG.DISCOUNT_PRICE];
                                    discount = bag[TablesAPI.BAG.TOTAL_PRICE];
                                }
                                return (
                                    <Col xs="12" sm="6" md="4" lg="4" key={i}>
                                        <Bag 
                                            title={bag[TablesAPI.BAG.NAME]}
                                            image={image}
                                            total={validatePrice(total)}
                                            discount={validatePrice(discount)}
                                            installments={bag[TablesAPI.BAG.INSTALLMENTS]}
                                            link={bag[TablesAPI.BAG.LINK]}
                                            price_installments={validatePrice(bag[TablesAPI.BAG.INSTALLMENTS_PRICE])}
                                        />
                                    </Col>
                                );
                            }
                        )
                    ) : (
                        <Row className={styles.no_item}>{Texts.NO_BAGS}</Row>
                    )
                )
            }
            </Row>
        </Row>
    );
}

export { ListBags };
export default ListBags;