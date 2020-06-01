import styled, { css } from 'styled-components';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const OptionLink = styled.span`
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