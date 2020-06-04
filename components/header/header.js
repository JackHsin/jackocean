import React, { useState, useContext } from 'react';
import Link from 'next/link';

import HeaderOptionsList from '../header-options-list/header-options-list.component';
import Contact from '../contact/contact.component';
import CartIcon from '../cart-icon/cart-icon.component';

import {
    HeaderContainer, LogoContainer, DesktopMenuContainer, MobileMenuContainer, OptionsContainer, OptionDiv,
    MenuDropdownContainer, MenuDropdownItemsContainer
} from './header.styles';

import { LocaleContext } from '../../context/localeProvider';

export const Header = ({ menuShow, toggleMenuShow }) => {
    const [ contactShow, setContactShow ] = useState(false);
    
    const { locale, setLocale } = useContext(LocaleContext);
    
    return (
        <HeaderContainer>
    
            <Link href="/">
                <LogoContainer>
                    <img src="/FulongTaiwanNiu.svg" alt="TaiwanNiu Logo" />
                </LogoContainer>
            </Link>

            <OptionsContainer>
                {/* Chinese/English Switch */}
                {
                    locale.includes('zh') ?
                        (
                            <OptionDiv onClick={() => setLocale('en')}>
                                English
                            </OptionDiv>
                        )
                    :
                        (
                            <OptionDiv onClick={() => setLocale('zh')}>
                                中文
                            </OptionDiv>
                        )
                }
                <DesktopMenuContainer>
                    <HeaderOptionsList setContactShow={setContactShow} />
                </DesktopMenuContainer>

                <MobileMenuContainer>
                    <CartIcon toggleMenuShow={toggleMenuShow}/>
                    {
                        menuShow ?
                            <MenuDropdownContainer>
                                <MenuDropdownItemsContainer>
                                    <HeaderOptionsList setContactShow={setContactShow}/>
                                </MenuDropdownItemsContainer>
                            </MenuDropdownContainer>
                        :
                            null
                    }
                </MobileMenuContainer>
            </OptionsContainer>
            {
                contactShow ?
                    (
                        <Contact setContactShow={setContactShow}/>
                    )
                :
                    null
            }
        </HeaderContainer>
    )
};

export default Header;