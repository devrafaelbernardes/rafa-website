import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './css/style.module.css';
import { Header } from '../../Components';
import Texts from '../../../../StaticContent/Texts';
import { FormEditBag, Bag, LoadingComponent, Link } from '../../../../GeneralComponents';
import { listBagsToEdit } from '../../../../Rest/query';
import { useParams } from 'react-router-dom';
import { TablesAPI } from '../../../../Rest/TablesAPI';
import { DashboardURL } from '../../../../Routers/URLs';

function EditBag(){
    var { bag : code_bag } = useParams();
    var [bags, setBags] = useState([]);
    var [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let IS_MOUNTED = true;
        if(code_bag){
            if(IS_MOUNTED){
                setLoading(false);
            }
        }else{
            try {
                listBagsToEdit()
                    .then(response => {
                        if(IS_MOUNTED){
                            if(response && response.data && response.data.response){
                                setBags(response.data.response);
                            }
                            setLoading(false);
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
        }

        return () => {
            IS_MOUNTED = false;
        }
    }, [code_bag]);

    return (
        <Row className={styles.editBag}>
            <Row>
                <Header
                    title={ Texts.EDIT_BAG }
                    subtitle={ Texts.CLICK_ON_THE_BAG_TO_EDIT }
                />
            </Row>
            <Row className={styles.body}>
                <LoadingComponent loading={loading}>
                    {
                        bags && bags.length > 0 ? (
                            bags.map((bag, i) => bag && bag.first_image && bag.first_image[TablesAPI.IMAGE.LOCATION] && (
                                <Col className={styles.bags} key={i} xs="12" sm="12" md="4" lg="4">
                                    <Link 
                                        link={DashboardURL().REDIRECT.EDIT_BAG(bag[TablesAPI.BAG.CODE])}
                                    >
                                        <Bag 
                                            title={bag[TablesAPI.BAG.NAME]}
                                            first_image={bag.first_image[TablesAPI.IMAGE.LOCATION]}
                                        />
                                    </Link>
                                </Col>
                            ))
                        ) : (
                            code_bag && <FormEditBag code={code_bag} />
                        )
                    }
                </LoadingComponent>
            </Row>
        </Row>
    );
}

export { EditBag };
export default EditBag;