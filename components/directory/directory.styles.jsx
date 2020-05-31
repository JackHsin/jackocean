import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: unset;
    }

`;