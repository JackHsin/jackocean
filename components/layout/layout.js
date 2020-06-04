import { useState, useContext, useEffect } from 'react';

import { initGA, logPageView } from "../../googleAnalytics.js"

import Header from '../header/header'
import Footer from '../footer/footer'

import { ComponentWrap } from '../../styles/layout.styles';

import { LocaleContext } from '../../context/localeProvider';

import enLocaleData from 'react-intl/locale-data/en.js';
import zhLocaleData from 'react-intl/locale-data/zh.js';
import en from '../../locales/en';
import zh from '../../locales/zh';
import { IntlProvider, addLocaleData, FormattedMessage, injectIntl, formatMessage } from 'react-intl';

addLocaleData([...enLocaleData, ...zhLocaleData])

export default function Layout({ children, menuShow, toggleMenuShow }) {

  const { locale, setLocale } = useContext(LocaleContext);

  // const [locale, setLocale] = useState("zh");

  let messages;
  if (locale.includes('zh')) {
      messages = zh;
  } else {
      messages = en;
  }

  useEffect(() => {        
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
      <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
        <>
          <Header menuShow={menuShow} toggleMenuShow={toggleMenuShow}/>
            <ComponentWrap>
              {children}
              </ComponentWrap>
          <Footer />
        </>
      </IntlProvider>
  )
}