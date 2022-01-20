import { BAG, IMAGE, PAGINATION, MEDIA, SOCIAL_NETWORK } from './TablesAPI';
import gql from 'graphql-tag';

export const GET_BAGS = gql`{
    response : bags {
        ${PAGINATION.ITEMS}{
            ${BAG.ID}
            ${BAG.NAME}
            ${BAG.LINK}
            ${BAG.DEPOSIT}
            ${BAG.DISCOUNT_PRICE}
            ${BAG.TOTAL_PRICE}
            ${BAG.INSTALLMENTS}
            ${BAG.INSTALLMENTS_PRICE}
            ${BAG.FIRST_IMAGE} {
                ${IMAGE.URL}
            }
            ${BAG.SECOND_IMAGE} {
                ${IMAGE.URL}
            }
        }
    }
}`;

export const GET_MEDIAS = (isLandingPage) => gql`{
    response : medias(is_landing_page: ${isLandingPage}) {
        ${PAGINATION.ITEMS}{
            ${MEDIA.LINK}
            ${MEDIA.ID}
            ${MEDIA.IS_LANDING_PAGE}
            ${MEDIA.TITLE}
            ${MEDIA.IMAGE} {
                ${IMAGE.URL}
            }
        }
    }
}`;

export const GET_SOCIAL_NETWORKS = gql`{
    response : social_networks {
        ${PAGINATION.ITEMS}{
            ${SOCIAL_NETWORK.LINK}
            ${SOCIAL_NETWORK.ID}
            ${SOCIAL_NETWORK.IMAGE} {
                ${IMAGE.URL}
            }
        }
    }
}`;