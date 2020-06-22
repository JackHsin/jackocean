import Link from 'next/link'
import { useRouter } from 'next/router'

import { OptionLink, OptionDiv } from './header-options-list.styles';

import { FormattedMessage } from 'react-intl';

export const HeaderOptionsList = ({setContactShow}) => {
   
    const pathLang = useRouter().pathname.split('/')[1].includes('en') ? 'en/' : '';

    return (
        // React.Fragment, to return mulitple elements from a component or function
        <>
            <OptionLink>
                <Link href={`/${pathLang}`}><a><FormattedMessage id="menu.home"/></a></Link>
            </OptionLink>          
            <OptionLink>
                <Link href={`/${pathLang}about`}><a><FormattedMessage id="menu.about"/></a></Link>
            </OptionLink>
            <OptionLink>
                <Link href={`/${pathLang}services`}><a><FormattedMessage id="menu.services"/></a></Link>
            </OptionLink>
            <OptionLink>
                <Link href={`/${pathLang}location`}><a><FormattedMessage id="menu.location"/></a></Link>
            </OptionLink> 
            <OptionLink to="#" onClick={() => setContactShow(true)}>
                <FormattedMessage id="menu.contact"/>
            </OptionLink>
        </>
    )
};

export default HeaderOptionsList;