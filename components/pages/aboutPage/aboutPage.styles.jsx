import styled from 'styled-components';

export const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const AboutTitleContainer = styled.div`
    text-align: center;
`;

export const AboutContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    margin: 50px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin: 0px;
    }
`;

export const AboutImageContainer= styled.div`
    width: 50%;
    flex: 1;
    height: 50vh;

    img {
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin: 0px;
        width: unset;
    }
`;

export const AboutIntroContainer= styled.div`
    width: 50%;
    flex: 1;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin: 0px;
        width: unset;
    }
`;
