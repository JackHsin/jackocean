import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import HeaderOptionsList from '../header-options-list/header-options-list.component';
import Contact from '../contact/contact.component';
import CartIcon from '../cart-icon/cart-icon.component';

import {
    HeaderContainer, LogoContainer, DesktopMenuContainer, MobileMenuContainer, OptionsContainer, OptionDiv, OptionLink,
    MenuDropdownContainer, MenuDropdownItemsContainer
} from './header.styles';

import { LocaleContext } from '../../context/localeProvider';

export const Header = ({ menuShow, toggleMenuShow }) => {
    const [ contactShow, setContactShow ] = useState(false);
    
    const { locale, setLocale } = useContext(LocaleContext);

    const router = useRouter().pathname.split('/');
    const pathname = router[router.length-1];
    console.log(pathname);
    
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
                            <Link href={`/en/${pathname}`}>
                                <OptionLink onClick={() => setLocale('en')}>
                                    English
                                </OptionLink>
                            </Link>
                        )
                    :
                        (
                            <Link href={`/${pathname}`}>
                                <OptionLink onClick={() => setLocale('zh')}>
                                    中文
                                </OptionLink>
                            </Link>
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