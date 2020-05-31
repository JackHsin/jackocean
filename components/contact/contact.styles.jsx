import styled from 'styled-components';

export const ContactContainerWrap = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ContactContainer = styled.div`
    width: 40%;
    height: auto;
    margin: auto;
    position: fixed;
    background-color: white;
    border-radius: 10px;
    top: 10%;
    bottom: auto;
    left: 0;
    right: 0;
    padding: 10px;
    overflow: scroll;
    overflow-x: hidden;
    // opacity: 0.9;


    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: 90%;
        align-items: center;
    }

    @media screen and (max-height: 700px) {
        bottom: 10%;
    }
`;

export const ContactTitle = styled.h2`
    margin-bottom: 10px;
`;

export const CloseButton = styled.a`
    position: absolute;
    z-index: 99;
    // border: 1px solid black;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    top: 3px;
    right: 3px;
    font-size: 30px;
    border-radius: 30%;
    cursor: pointer;
`