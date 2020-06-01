import Link from 'next/link'

import { OptionLink, OptionDiv } from './header-options-list.styles';

import { FormattedMessage } from 'react-intl';

export const HeaderOptionsList = ({setContactShow}) => {
   
    return (
        // React.Fragment, to return mulitple elements from a component or function
        <>
            <OptionLink to='/'>
                <Link href="/"><a><FormattedMessage id="menu.home"/></a></Link>
            </OptionLink>          
            <OptionLink to='/about'>
                <Link href="/test"><a><FormattedMessage id="menu.about"/></a></Link>
            </OptionLink>
            <OptionLink to='/services'>
                <Link href="/test"><a><FormattedMessage id="menu.services"/></a></Link>
            </OptionLink>
            <OptionLink to="#" onClick={() => setContactShow(true)}>
                <Link href="/contact"><a><FormattedMessage id="menu.contact"/></a></Link>
            </OptionLink>

            {/* Sign In/Out Switch
            {
                currentUser ?
                    (
                    <OptionLink to onClick={signOutStart}>
                        <FormattedMessage id="menu.signout"/>
                    </OptionLink>
                    )
                :
                    (
                    <OptionLink to='/signin'>
                        <FormattedMessage id="menu.signin"/>
                    </OptionLink>
                    )
            } */}
        </>
    )
};

export default HeaderOptionsList;