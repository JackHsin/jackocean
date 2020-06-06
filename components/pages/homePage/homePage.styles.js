import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px;
    height: auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const CoverBannerContainer = styled.div`
    width: 100%;
    height: 250px;
    // justify-items: center;
    // vertical-align: middle;
    align-items: center;
    display: grid;
    text-align: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;

    h1 {
        padding: 100px;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 200px;

        h1 {
            font-size: 25px;
            padding: unset;
        }
    }
`

export const CoverBannerText = styled.h1`
    color: white;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px;
    height: auto;
    width: 100%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }
`

export const CoverPhotoContainer = styled.div`
    display: flex;
    flex: 3;
    width: 100%;
    height: 100%;
    // margin-bottom: 20px;
    padding: 7.5px;
    justify-content: center;
`

export const CoverPhoto = styled.img`
    // display: block;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    object-fit: cover;

    width: 70vw;
    height: 80vh;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 40vh;
    }
`;