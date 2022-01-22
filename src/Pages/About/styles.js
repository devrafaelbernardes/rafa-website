import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const Container = styled(Row)`
    padding: 0;
    justify-content: center;
`;

export const General = styled(Row)`
    max-width: 1000px;
    padding: 30px 0 20px;
    margin: 0;
    display: flex;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        padding-inline: 30px;
    }
`;

export const ContainerImage = styled(Col)`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const ContainerDescription = styled(Col)`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-left: 64px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        padding-left: 0;
        padding-top: 64px;
    }
`;

export const Description = styled.p`
    font-size: 21px;
    font-family: calibri;
`;