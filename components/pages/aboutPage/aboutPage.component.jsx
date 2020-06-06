import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";

// import './aboutPage.styles.scss';
import { AboutPageContainer, AboutTitleContainer, AboutContentContainer, AboutImageContainer, AboutIntroContainer } from './aboutPage.styles'

// import ima from 'images/TaiwanNiu-FB-Big-Logo-noBG.png';
// import introMD from './aboutPage.intro.md';

import { injectIntl, formatMessage, FormattedMessage } from 'react-intl';

import { LocaleContext } from '../../../context/localeProvider';

const AboutPage = ( { intl: { formatMessage } } ) => {
    // const [ introContent, setIntroContent ] = useState("")

    const { locale, setLocale } = useContext(LocaleContext);
    
    const pathLang = useRouter().pathname.split('/')[1];

    useEffect(() => {        
        if(pathLang.includes('en'))
            setLocale('en');
        else
            setLocale('zh');
    }, []);

    return (
        <AboutPageContainer>
            <Helmet>
                <title>{formatMessage({ id: `aboutpage.title` })}</title>
                <meta name="description" content={formatMessage({ id: `aboutpage.des` })} />
            </Helmet>

            <AboutTitleContainer>
                <h1><FormattedMessage id="about.title"/></h1>
                <h3><FormattedMessage id="about.openinghours"/></h3>
            </AboutTitleContainer>
            <AboutContentContainer>
                <AboutImageContainer>
                    <img src="/images/TaiwanNiu-FB-Big-Logo-noBG.png" />
                </AboutImageContainer>
                
                <AboutIntroContainer>
                    {/* <ReactMarkdown source={introContent} /> */}
                    {formatMessage({ id: `aboutpage.introduction` })}
                </AboutIntroContainer>
            </AboutContentContainer>
        </AboutPageContainer>
    )
}

export default injectIntl(AboutPage);