import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const CoverPhotoContainer = styled.div`
    display: flex;
    flex: 3;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
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