import React from 'react'

import { Link } from './../../ui/Link'

import { LinkSection } from './../../ui/LinkSection'
import { BlogLink } from './../../ui/BlogLink'
import { Text } from './../../ui/Text'

import { entries } from './../constants/entries'
import { PageHeader } from './../../base/components/PageHeader'

export const BlogPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <LinkSection>
        {Object.entries(entries).map(([key, value]) => (
          <BlogLink key={key}>
            <Link to={`/blog/${key}`}>
              {value.title}
              <Text>{value.publishDate}</Text>
            </Link>
          </BlogLink>
        ))}
      </LinkSection>
    </>
  )
}
