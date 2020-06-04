import styled from 'styled-components';

export const ServicesPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    position: relative

`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: raw;
    width: 100%;
    margin: 10px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const TitleImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 5px;
`

export const ContentContainer = styled.div`
    // display: flex;
    flex: 4;
    font-size: 30px;
    padding: 5px;
    display: grid;
    justify-items: center;
    // vertical-align: middle;
    align-items: center;
`

export const ImageContainer = styled.img`
    // display: block;
    // background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    object-fit: cover;
    padding: 5px;

    width: 30vw;
    height: 30vh;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 40vh;
    }
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    color: ${({ color }) => `${color}`};
`;