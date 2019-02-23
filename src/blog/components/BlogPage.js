import React from 'react'
import { Header } from './../../ui/Header'

import { Link } from './../../ui/Link'
import { Subtitle } from './../../ui/Subtitle'
import { LinkSection } from './../../ui/LinkSection'
import { BlogLink } from './../../ui/BlogLink'
import { Text } from './../../ui/Text'

import { FeaturedBlogPosts } from './FeaturedBlogPosts'
import { entries } from './../constants/entries'

export const BlogPage = ({ history }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header>Blog</Header>
        <Link to={'/'}>Dylan Stein</Link>
      </div>
      <FeaturedBlogPosts history={history} subtitle="Featured" />
      <LinkSection>
        <Subtitle>All Blog Posts</Subtitle>
        {Object.entries(entries).map(([key, value]) => (
          <BlogLink>
            <Link to={`/blog/${key}`} key={key} fontSize={'2rem'}>
              {value.title}
            </Link>
            <Text>{value.subtitle}</Text>
            <Text>{value.publishDate}</Text>
          </BlogLink>
        ))}
      </LinkSection>
    </>
  )
}
