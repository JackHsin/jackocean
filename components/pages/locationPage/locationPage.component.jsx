import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";

import { ServicesPageContainer, SectionContainer, TitleImageContainer, ContentContainer, TitleContainer, ImageContainer  } from './locationPage.styles';

import { injectIntl, formatMessage, FormattedMessage } from 'react-intl';

import { LocaleContext } from '../../../context/localeProvider';

const LocationPage = ( { intl: { formatMessage } } ) => {
    const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facere fugiat eius nemo nesciunt officia at debitis. Quod fuga a quibusdam, eligendi rerum quam molestiae, quae ullam labore vero dignissimos?"

    const { locale, setLocale } = useContext(LocaleContext);
    
    const pathLang = useRouter().pathname.split('/')[1];

    useEffect(() => {        
        if(pathLang.includes('en'))
            setLocale('en');
        else
            setLocale('zh');
    }, []);

    return (
        <ServicesPageContainer>
            <Helmet>
                <title>{formatMessage({ id: `servicespage.title` })}</title>
                <meta name="description" content={formatMessage({ id: `servicespage.des` })} />
            </Helmet>
            
            <ImageContainer className='image' src="images/fulong_satellite_map.jpg" />
            
        </ServicesPageContainer>  
    );
};

export default injectIntl(LocationPage);