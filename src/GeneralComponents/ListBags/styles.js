import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const Container = styled(Row)`
    padding: 0;
`;

export const ContainerBag = styled(Col)`
    margin-bottom: 50px;

    & > *{
        justify-content: center;
    }
`;