import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Bag } from '../../GeneralComponents';
import { toDecimal } from '../../StaticContent/Functions';
import ImageBag from '../../Assets/Images/bag-test.png';

function Home(){
    var [loading, setLoading] = useState(true);
    var [bags, setBags] = useState(null);

    useEffect(() => {
        setBags([
            {
                title : 'Bolsa qualquer',
                image : ImageBag,
                total_price : 152.99,
                descount_price : 102.99,
                installments : 5,
                price_installments : 20.5,
                link : '/',
            }
        ]);
        setLoading(false);
    }, []);

    return (
        <Row className={styles.home}>
            {
                loading ? (
                    "Carregando"
                ) : (
                    bags && bags.length > 0 ? (
                        bags.map(
                            (bag, i) => {
                                return (
                                    <Col xs="12" sm="6" md="4" lg="4" key={i}>
                                        <Bag 
                                            title={bag.title}
                                            image={bag.image}
                                            total={toDecimal(bag.total_price)}
                                            descount={toDecimal(bag.descount_price)}
                                            installments={bag.installments}
                                            link={bag.link}
                                            price_installments={toDecimal(bag.price_installments)}
                                        />
                                    </Col>
                                );
                            }
                        )
                    ) : (
                        "Não tem bolsa"
                    )
                )
            }
        </Row>
    );
}

export { Home };
export default Home;