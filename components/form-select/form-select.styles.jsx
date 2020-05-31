import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

export const GroupContainer = styled.div`
    position: relative;
    margin: 0 0 20px 0;
`;

export const FormSelectContainer = styled.select`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: 1px solid;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};

    &:focus {
        outline: none;
    }

`;
FormSelectContainer.displayName = 'FormSelectContainer';

export const FormSelectOption = styled.option`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

`;
FormSelectOption.displayName = 'FormSelectOption';