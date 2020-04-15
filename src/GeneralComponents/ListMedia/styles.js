import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import MediaDefault from 'GeneralComponents/Media';

export const Container = styled(Row)`
    padding: 0;
`;

export const ContainerMedia = styled(Col)`
    padding: 10px;
`;

export const Media = styled(MediaDefault)`
    box-shadow:0 1px 3px #999;

    &:hover{
        box-shadow:0 1px 3px #000;
    }
`;