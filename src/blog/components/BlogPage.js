import React from 'react'

import { Link } from './../../ui/Link'
import { Subtitle } from './../../ui/Subtitle'
import { LinkSection } from './../../ui/LinkSection'
import { BlogLink } from './../../ui/BlogLink'
import { Text } from './../../ui/Text'

import { FeaturedBlogPosts } from './FeaturedBlogPosts'
import { entries } from './../constants/entries'
import { PageHeader } from './../../base/components/PageHeader'

export const BlogPage = ({ match, history }) => {
  return (
    <>
      <PageHeader match={match} />

      <FeaturedBlogPosts history={history} subtitle="Featured" />
      <LinkSection>
        <Subtitle>All Blog Posts</Subtitle>
        {Object.entries(entries).map(([key, value]) => (
          <BlogLink>
            <Link to={`/blog/${key}`} key={key} fontSize={'1.25rem'}>
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
