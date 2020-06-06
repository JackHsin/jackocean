import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";

import { ServicesPageContainer, SectionContainer, TitleImageContainer, ContentContainer, TitleContainer, ImageContainer  } from './servicesPage.styles';

import { injectIntl, formatMessage, FormattedMessage } from 'react-intl';

import { LocaleContext } from '../../../context/localeProvider';

const ServicesPage = ( { intl: { formatMessage } } ) => {
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

            <SectionContainer id='bike'>
                <TitleImageContainer>
                    <TitleContainer color='#66BC43'><FormattedMessage id="services.bike"/></TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/4c4d1c7d-80cf-4ba2-8b55-81b8ab79226e.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {formatMessage({ id: `services.bikeText` })}
                </ContentContainer>
            </SectionContainer>
            
            <SectionContainer id='hostel'>
                <TitleImageContainer>
                    <TitleContainer color='orange'><FormattedMessage id="services.hostel"/></TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/aad03ac0-16fa-4206-9aca-65279adfbd85.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {formatMessage({ id: `services.hostelText` })}
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <TitleImageContainer id='activity'>
                    <TitleContainer color='lightblue'><FormattedMessage id="services.activity"/></TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/a6e91c1a-44de-40ec-bda6-f55e90377826.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {formatMessage({ id: `services.activityText` })}
                </ContentContainer>
            </SectionContainer>

            
        </ServicesPageContainer>  
    );
};

export default injectIntl(ServicesPage);