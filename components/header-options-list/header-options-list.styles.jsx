import styled, { css } from 'styled-components';
import { Link } from 'next/link';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const OptionLink = styled.a`
    ${OptionContainerStyles}
    
    :-webkit-any-link {
        text-decoration: none;
        color: black;
    }
`;
OptionLink.displayName = 'OptionLink';

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;