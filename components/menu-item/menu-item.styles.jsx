import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    height: 30%;
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    overflow: hidden;
    // position: absolute;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & .content {
            opacity: 0.9;
        }
    }

    @media screen and (max-width: 800px) {
        flex: 1 1 auto;
        height: 150px;
        width: 48%;
        margin: 5px 0;

        &:first-child {
            margin-right: 5px;
        }
    }
`;
MenuItemContainer.displayName = 'MenuItemContainer';

export const BackgroundImageContainer= styled.div`
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
`;
BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export const ContentContainer = styled.div`
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h1 {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 2vw;
        color: #4a4a4a;
    }

    span {
        font-weight: lighter;
        font-size: 2vw;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 4vw;
        }
    
        span {

            font-size: 4vw;
        }
    }
`;

export const ContentTitle = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const ContentSubtitle = styled.div`
    font-weight: lighter;
    font-size: 16px;
`;