import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    padding: 10px;
    align-items: center;
`;

export const ContainerMenu = styled(Row)`
    padding: 0;
    & *{
        font-size: 20px;
    }
    & > *{
        justify-content: center;
    }
`;


export const ContainerLogo = styled(Row)`
    padding: 0;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
    & > *{
        width: 100%;
        max-width: 300px;
    }
`;