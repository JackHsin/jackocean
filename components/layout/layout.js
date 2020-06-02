import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({ children, locale, setLocale, menuShow, toggleMenuShow }) {
  return (
    <>
      <Header locale={locale} setLocale={setLocale} menuShow={menuShow} toggleMenuShow={toggleMenuShow}/>
        {children}
      <Footer />
    </>
  )
}