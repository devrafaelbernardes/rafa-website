import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Bag, Loading } from '../';
import { TablesAPI } from '../../Rest/TablesAPI';
import Texts from '../../StaticContent/Texts';
import { listBags } from '../../Rest/query';

function ListBags({ reloading }){
    reloading = reloading === true;
    var [loading, setLoading] = useState(true);
    var [bags, setBags] = useState(null);

    useEffect(() => {
        let IS_MOUNTED = true;
        try {
            listBags()
            .then(async(response) => {
                if(response && response.data && response.data.response && IS_MOUNTED){
                    await setBags(response.data.response);
                }
                if(IS_MOUNTED){
                    await setLoading(false);
                }
            })
            .catch(e => {
                if(IS_MOUNTED){
                    setLoading(false);
                }
            });    
        } catch (error) {
            if(IS_MOUNTED){
                setLoading(false);
            }
        }

        return () => {
            IS_MOUNTED = false;
        };
    }, [reloading]);
    
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
                                const validateImage = (image) => image && image[TablesAPI.IMAGE.LOCATION] ? image[TablesAPI.IMAGE.LOCATION] : null;
                                let first_image = validateImage(bag.first_image);
                                let second_image = validateImage(bag.second_image);
                                let total = bag[TablesAPI.BAG.TOTAL_PRICE];
                                let discount = bag[TablesAPI.BAG.DISCOUNT_PRICE];
                                let deposit = bag[TablesAPI.BAG.DEPOSIT];
                                let code = bag[TablesAPI.BAG.CODE];
                                let isRight = second_image ? i % 2 === 0 : false;
                                let tam = second_image ? 12 : 6;
                                
                                return (
                                    <Col className={styles.divBags} xs="12" sm="12" md={tam} lg={tam} key={i}>
                                        <Bag
                                            key={i} 
                                            code={code}
                                            showButtons
                                            right={isRight}
                                            title={bag[TablesAPI.BAG.NAME]}
                                            first_image={first_image}
                                            second_image={second_image}
                                            total={total}
                                            discount={discount}
                                            deposit={deposit}
                                            installments={bag[TablesAPI.BAG.INSTALLMENTS]}
                                            price_installments={bag[TablesAPI.BAG.INSTALLMENTS_PRICE]}
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