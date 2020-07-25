import styled, { css } from 'styled-components';

const OptionContainerStyles = css`
    padding: 0px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding 10px;
    }
`;

export const LogoContainer = styled.a`
    height: 100%;
    width: auto;
    padding: 0 0 0 25px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
    }

    @media screen and (max-width: 800px) {
        width: auto;
        padding 0px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled.a`
    ${OptionContainerStyles}
    border: 1px solid black;
    :-webkit-any-link {
        text-decoration: none;
        color: black;
    }
`;
OptionLink.displayName = 'OptionLink';

export const OptionDiv = styled.div`
    border: 1px solid black;
    padding: 0px 15px;
    cursor: pointer;
    width: auto;
`;

export const DesktopMenuContainer = styled.div`

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const MobileMenuContainer = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: unset;
    }
`

// Menu Dropdown
export const MenuDropdownContainer = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    opacity: 0.95;

    @media screen and (max-width: 800px) {
        top: 60px;
        right: 0px;
    }
`;

export const MenuDropdownItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // overflow: scroll;
`;