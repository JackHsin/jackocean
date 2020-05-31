import React, { useState } from 'react';
// import { ReactComponent as Logo } from '../../public/FulongTaiwanNiu.svg';
// import CartIcon from '../../components/cart-icon/cart-icon.component';

// import ContactPage from '../contact/contact.component';
import HeaderOptionsList from '../header-options-list/header-options-list.component';

import {
    HeaderContainer, LogoContainer, DesktopMenuContainer, MobileMenuContainer, OptionsContainer, OptionDiv,
    MenuDropdownContainer, MenuDropdownItemsContainer
} from './header.styles';

export const Header = ({ hidden=true }) => {
    const [ contactShow, setContactShow ] = useState(false);
    
    return (
        <HeaderContainer>
            <LogoContainer to ="/">
                <img src="FulongTaiwanNiu.svg" alt="TaiwanNiu Logo" />
            </LogoContainer>

            <OptionsContainer>
                {/* Chinese/English Switch
                {
                    locale.includes('zh') ?
                        (
                            <OptionDiv onClick={() => setLocale('en')}>
                                English
                            </OptionDiv>
                        )
                    :
                        (
                            <OptionDiv onClick={() => setLocale('zh-Hant')}>
                                中文
                            </OptionDiv>
                        )
                } */}
                <DesktopMenuContainer>
                    <HeaderOptionsList setContactShow={setContactShow} />
                </DesktopMenuContainer>
{/* 
                <MobileMenuContainer>
                    <CartIcon />
                    {
                        hidden ?
                            null
                        :
                        <MenuDropdownContainer>
                            <MenuDropdownItemsContainer>
                                <HeaderOptionsList setContactShow={setContactShow}/>
                            </MenuDropdownItemsContainer>
                        </MenuDropdownContainer>
                    }
                </MobileMenuContainer> */}
            </OptionsContainer>
            {/* {
                contactShow ?
                    (
                        <ContactPage setContactShow={setContactShow}/>
                    )
                :
                    null
            } */}
        </HeaderContainer>
    )
};

export default Header;