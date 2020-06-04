import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";

import Carousel from 'react-bootstrap/Carousel';
import Directory from '../../directory/directory.component';

import { HomePageContainer, CoverPhotoContainer, CoverPhoto } from './homePage.styles'

import { injectIntl, formatMessage } from 'react-intl';

import { LocaleContext } from '../../../context/localeProvider';

function HomePage( { intl: { formatMessage } } ) {

  const { locale, setLocale } = useContext(LocaleContext);
    
  const pathLang = useRouter().pathname.split('/')[1];

  useEffect(() => {        
      if(pathLang.includes('en'))
          setLocale('en');
      else
          setLocale('zh');
  }, []);

  return (
      <HomePageContainer>
          <Helmet>
              <title>{formatMessage({ id: `homepage.title` })}</title>
              <meta name="description" content={formatMessage({ id: `homepage.des` })} />
          </Helmet>
          
          <CoverPhotoContainer>
              <Carousel>
                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="/images/fulong_taiwan_niu_sotre.jpg"
                          alt={formatMessage({ id: `image.coverphoto.taiwanniuStore` })}
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="/images/surfing_uncle.jpg"
                          alt={formatMessage({ id: `image.coverphoto.surfingTyphoonWave` })}
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="/images/suspension_bridge.jpg"
                          alt={formatMessage({ id: `image.coverphoto.longmenSuspensionBridge` })}
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="/images/birds_eye_view.jpg"
                          alt={formatMessage({ id: `image.coverphoto.birdsEyeViewOfFulongBeach` })}
                      />
                  </Carousel.Item>


              </Carousel>

          </CoverPhotoContainer>

          <Directory />
      </HomePageContainer>
  )
}

export default injectIntl(HomePage);