import { useState } from 'react';
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import Layout from '../components/layout/layout';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import { PageContainer, ComponentWrap } from '../styles/_app.styles';

import enLocaleData from 'react-intl/locale-data/en.js';
import zhLocaleData from 'react-intl/locale-data/zh.js';
import en from '../locales/en';
import zh from '../locales/zh';
import { IntlProvider, addLocaleData, FormattedMessage, injectIntl, formatMessage } from 'react-intl';

addLocaleData([...enLocaleData, ...zhLocaleData])

export default function App({ Component, pageProps }) {
    const [locale, setLocale] = useState("zh-TW");

    const [ menuShow, setMenuShow ] = useState(false);
    const toggleMenuShow = () => setMenuShow(!menuShow);

    let messages;
    if (locale.includes('zh')) {
        messages = zh;
    } else {
        messages = en;
    }

    return (
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
            <PageContainer onClick={(event) => {
                if(event.target.id === "cartIcon") return;

                if (menuShow)
                return toggleMenuShow()
            }}>
                
                <Header locale={locale} setLocale={setLocale} menuShow={menuShow} toggleMenuShow={toggleMenuShow}/>
                    <ComponentWrap>
                        <Component {...pageProps} locale={locale} setLocale={setLocale}/>
                    </ComponentWrap>
                <Footer />
                
            </PageContainer>
        </IntlProvider>
    )
}