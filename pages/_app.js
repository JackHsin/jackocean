import { useState } from 'react';
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout/layout';

import { PageContainer } from '../styles/_app.styles';

import LocaleProvider from '../context/localeProvider';

export default function App({ Component, pageProps }) {
    const [ menuShow, setMenuShow ] = useState(false);
    const toggleMenuShow = () => setMenuShow(!menuShow);

    return (
        <LocaleProvider>
            <PageContainer onClick={(event) => {
                if(event.target.id === "cartIcon") return;

                if (menuShow)
                return toggleMenuShow()
            }}>
                <Layout menuShow={menuShow} toggleMenuShow={toggleMenuShow}>  
                    <Component {...pageProps}/>
                </Layout>
            </PageContainer>
        </LocaleProvider>
    )
}