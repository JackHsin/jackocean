import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding: 0px 7.5px;
    height: 80vh;
    // position: relative;

    @media screen and (max-width: 800px) {
        flex-direction: unset;
    }

`;