import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    padding: 0px;

    span {
        margin: auto 0 auto;
    }

    @media screen and (max-width: 800px) {
        height: 60px;
        padding 10px;
    }
`;