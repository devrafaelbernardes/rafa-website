import styled from 'styled-components';
import { Row } from 'react-bootstrap';

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
`;