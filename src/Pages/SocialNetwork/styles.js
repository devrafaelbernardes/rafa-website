import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ListSocialNetwork from 'GeneralComponents/ListSocialNetwork';

export const Container = styled(Row)`
    padding: 0;
    justify-content: center;
`;

export const SocialNetworks = styled(ListSocialNetwork)`
    max-width: 1000px;
`;