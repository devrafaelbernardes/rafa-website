import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Bag, Loading } from '..';
import { toDecimal } from '../../StaticContent/Functions';
import { listaBolsas } from '../../Rest/Functions';
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
        await listaBolsas()
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

                                let image = bag.imagens && bag.imagens.length > 0 ? bag.imagens[0][TablesAPI.IMAGEM.CAMINHO] : null;
                                let total = bag[TablesAPI.BOLSA.PRECO_TOTAL];
                                let descount = null;
                                if(bag[TablesAPI.BOLSA.PRECO_DESCONTO] < bag[TablesAPI.BOLSA.PRECO_TOTAL]){
                                    total = bag[TablesAPI.BOLSA.PRECO_DESCONTO];
                                    descount = bag[TablesAPI.BOLSA.PRECO_TOTAL];
                                }
                                return (
                                    <Col xs="12" sm="6" md="4" lg="4" key={i}>
                                        <Bag 
                                            title={bag[TablesAPI.BOLSA.NOME]}
                                            image={image}
                                            total={validatePrice(total)}
                                            descount={validatePrice(descount)}
                                            installments={bag[TablesAPI.BOLSA.PARCELAS]}
                                            link={bag[TablesAPI.BOLSA.LINK]}
                                            price_installments={validatePrice(bag[TablesAPI.BOLSA.PRECO_PARCELAS])}
                                        />
                                    </Col>
                                );
                            }
                        )
                    ) : (
                        Texts.NO_BAGS
                    )
                )
            }
            </Row>
        </Row>
    );
}

export { ListBags };
export default ListBags;