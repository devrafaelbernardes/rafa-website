import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'GeneralComponents/Link';

export const Container = styled(Row)`
    padding: 20px 10px 25px;
    background: 0;

    & > *{
        justify-content: center;
    }
`;

export const Copyright = styled(Row)`
    font-size: 12px;
`;

export const SocialNetworks = styled(Row)`
    text-transform: uppercase;
    align-items: center;
    & > *{
        padding: 0 5px;
    }
`;

export const ContainerSocialNetwork = styled(Row)`
    font-size: 30px;
`;

export const InfoCompanyContainer = styled(Row)`
    margin-bottom: 10px !important;
    text-align: center;
    
    & > *{
        justify-content: center;
    }
`;

export const InfoCompany = styled(Row)`
    text-transform: uppercase;
`;

export const SocialNetwork = styled(Link)`
    color: ${({theme}) => theme.colors.text_dark};
    justify-content: center;
    align-items: center;
    &:hover{
        color: ${({theme}) => theme.colors.text_light};
    }
    & > *{
        justify-content: center;
        align-items: center;
    }
`;

export const DeveloperLink = styled(Link)`
    color: ${({theme}) => theme.colors.text_dark};
    &:hover{
        color: ${({theme}) => theme.colors.text_light};
    }
`;