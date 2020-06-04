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

              {/* <CoverPhoto imageUrl={coverPhoto} />  */}

              <Carousel>
                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="/images/Cover_Photo.jpg"
                          alt="First slide"
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="https://a0.muscache.com/im/pictures/bcbc6c02-b0fc-4ad4-9237-0807793cd277.jpg?aki_policy=xx_large"
                          alt="Second slide"
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="https://a0.muscache.com/im/pictures/6a8e71b2-4031-4cf1-b05f-8c6959349ed0.jpg?aki_policy=xx_large"
                          alt="Third slide"
                      />
                  </Carousel.Item>

                  <Carousel.Item>
                      <CoverPhoto
                          className="d-block"
                          src="https://a0.muscache.com/im/pictures/76a701d7-8040-4b23-bf11-692364fb00b6.jpg?aki_policy=xx_large"
                          alt="Fourth slide"
                      />
                  </Carousel.Item>


              </Carousel>

          </CoverPhotoContainer>

          <Directory />
      </HomePageContainer>
  )
}

export default injectIntl(HomePage);