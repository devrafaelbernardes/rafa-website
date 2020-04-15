import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'GeneralComponents/Link';

export const Container = styled(Row)`
    padding: 0;
    justify-content: center;
`;

export const General = styled(Row)`
    max-width: 1000px;
    padding: 30px 0 20px;
    margin: 0 auto;
`;

export const Footer = styled(Row)`
    padding: 30px 5px 0;

    & > *{
        justify-content: center;
    }
`;

export const FooterLink = styled(Link)`
    font-weight: 700;
    padding: 0;
    font-size: 23px;
    text-transform: uppercase;
    text-align: center;
    color: ${({theme}) => theme.colors.red};
    font-family: ${({theme}) => theme.fonts.primary};
    &:hover{
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const OtherModels = styled(Row)`
    padding: 0;
    font-size: 23px;
    text-transform: uppercase;
    text-align: center;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.primary};
`;