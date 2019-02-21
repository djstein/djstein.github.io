import React from 'react'
import { Header } from './../../ui/Header'

import { Link } from './../../ui/Link'
import { Subtitle } from './../../ui/Subtitle'
import { LinkSection } from './../../ui/LinkSection'

import { FeaturedBlogPosts } from './FeaturedBlogPosts'
import { entries } from './../constants/entries'

export const BlogPage = ({ history }) => {
  return (
    <>
      <Header>Blog</Header>
      <FeaturedBlogPosts history={history} subtitle="Featured" />
      <LinkSection>
        <Subtitle>All Blog Posts</Subtitle>
        {Object.entries(entries).map(([key, value]) => (
          <Link to={`/blog/${key}`} key={key}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: '0' }}>{value.title}</h3>
              <div>{value.publishDate}</div>
            </div>
            <p>{value.subtitle}</p>
          </Link>
        ))}
      </LinkSection>
    </>
  )
}
