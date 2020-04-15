import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'GeneralComponents/Link';

export const Container = styled(Row)`
    padding: 10px;
    background: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    justify-content: center;

    & > *{
        justify-content: center;
    }
`;

const activeClassName = "option-menu-link";
const activeClassNameString = `.${activeClassName}`;
export const OptionMenu = styled(Link).attrs({activeClassName})`
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 25px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};

    &${activeClassNameString}, &:hover{
        color: ${({ theme }) => theme.colors.secondary};
        outline: 0;
        text-decoration: none;
        font-weight: bold;
    }
`;