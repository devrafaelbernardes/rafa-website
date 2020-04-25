import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Link from 'GeneralComponents/Link';
import Image from 'GeneralComponents/Image';
import List from 'GeneralComponents/List';

export const Container = styled(Row)`
    padding: 0;
`;

export const Header = styled(Row)`
    padding: 12px 0;
    font-size: 30px;
    justify-content: center;
    font-family: ${({theme}) => theme.fonts.primary};
`;

export const Body = styled(Row)`
    padding: 0;
    justify-content: center;
`;

export const ItemsList = styled(List)`
    max-width: 686px;
    padding: 0;
    justify-content: space-between;

    @media screen and (max-width: ${({theme}) => theme.sizes.sm}){
        max-width: 100%;
    }
`;

export const ItemLink = styled(Link)`
    padding: 0;
`;

export const ItemContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 6,
})`
    padding: 15px;
`;

export const ItemGeneralContainer = styled(Row)`
    padding: 0;
`;

export const ItemImage = styled(Image)`
    padding: 0;
`;