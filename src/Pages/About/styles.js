import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    padding: 0;
`;

export const ContainerImage = styled(Row)`
    width: 100%;
    margin: 30px 0;
`;

export const ContainerDescription = styled(Row)`
    padding: 0;

    & > *{
        margin: 0 auto !important;
    }
`;

export const Description = styled(Row)`
    text-align: center;
    font-size: 21px;
    font-family: calibri;
`;