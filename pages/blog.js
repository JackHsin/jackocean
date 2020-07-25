import Head from 'next/head'
import BlogLayout, { siteTitle } from '../components/blog/blog-layout/blog-layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/blog/date/date'

import React, { useState } from 'react';

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {

  // const [count, setCount] = useState(0);

  return (
    <BlogLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am software engineer, surfer, free diver, SUPer, Skateboarder, camper. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button> */}
    </BlogLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}