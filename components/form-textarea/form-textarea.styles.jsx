import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
    top: -20px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupContainer = styled.div`
    position: relative;
    // margin: 45px 0;
`;

export const FormTextareaContainer = styled.textarea`
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
    margin: 15px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles};
    }
`;
FormTextareaContainer.displayName = 'FormTextareaContainer';

export const FormTextareLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles};
    }
`;
FormTextareLabel.displayName = 'FormTextareLabel';