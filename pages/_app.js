import { useState } from 'react';
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout/layout';


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
        <div onClick={(event) => {
            if(event.target.id === "cartIcon") return;

            if (menuShow)
            return toggleMenuShow()
        }}>
            <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
                <Layout locale={locale} setLocale={setLocale} menuShow={menuShow} toggleMenuShow={toggleMenuShow}>
                    <Component {...pageProps} locale={locale} setLocale={setLocale}/>
                </Layout>
            </IntlProvider>
        </div>
    )
}