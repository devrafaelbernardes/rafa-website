import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import SocialNetworkDefault from 'GeneralComponents/SocialNetwork';

export const Container = styled(Row)`
    padding: 0;
`;

export const ContainerSocialNetwork = styled(Col)`
    padding: 15px 35px;
`;

export const SocialNetwork = styled(SocialNetworkDefault)`
    box-shadow:0 1px 3px #999;

    &:hover{
        box-shadow:0 1px 3px #000;
    }
`;