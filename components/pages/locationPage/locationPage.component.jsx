import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";

import { LocationPageContainer, SectionContainer, ImageContainer, ContentContainer, TitleContainer, CoverMapContainer  } from './locationPage.styles';

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
        <LocationPageContainer>
            <Helmet>
                <title>{formatMessage({ id: `locationpage.title` })}</title>
                <meta name="description" content={formatMessage({ id: `locationpage.des` })} />
            </Helmet>
            <TitleContainer><FormattedMessage id='location.map.title'/></TitleContainer>
            <CoverMapContainer className='image' src="/images/fulong_satellite_map.jpg" />

            <TitleContainer><FormattedMessage id='location.navigation.title'/></TitleContainer>
            <SectionContainer>
                <ImageContainer  src="/images/1_intersection_to_bike_store.jpg"/>
                <ContentContainer>
                    <FormattedMessage id='location.1'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/2_to_bridge.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.2'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/3_turn_life_to_block.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.3'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/4_in_block.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.4'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/5_downstair_gate.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.5'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/6_go_downstair.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.6'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/7_turn_right_to_house.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.7'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/8_rinse_arez.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.8'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/9_up_stair.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.9'/>
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <ImageContainer  src="/images/10_front_door.jpg"/>
                <ContentContainer>
                <FormattedMessage id='location.10'/>
                </ContentContainer>
            </SectionContainer>

            
        </LocationPageContainer>  
    );
};

export default injectIntl(LocationPage);