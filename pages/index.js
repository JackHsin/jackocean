import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date/date'

import Carousel from 'react-bootstrap/Carousel';

import React, { useState } from 'react';

import Directory from '../components/directory/directory.component';

import { HomePageContainer, CoverPhotoContainer, CoverPhoto } from '../styles/index.styles'

export default function Home({ allPostsData }) {

  // const [count, setCount] = useState(0);

  return (
    <HomePageContainer>
        
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