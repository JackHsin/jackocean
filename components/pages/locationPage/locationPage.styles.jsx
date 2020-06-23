import styled from 'styled-components';



export const LocationPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    position: relative

`;

export const CoverMapContainer = styled.img`
    width: 100%;
    height: 100%;

    margin-bottom: 50px;
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

export const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    flex: 2;
    width: 100%;
    height: 100%;
`

export const ContentContainer = styled.div`
    // display: flex;
    flex: 1;
    font-size: 30px;
    padding: 5px;
    display: grid;
    justify-items: center;
    // vertical-align: middle;
    align-items: center;
`

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 10px;
    color: ${({ color }) => `${color}`};
`;