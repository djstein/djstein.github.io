import React from 'react'

import { Link } from './../../ui/Link'

import { LinkSection } from './../../ui/LinkSection'
import { ContentLink } from '../../ui/ContentLink'
import { Text } from './../../ui/Text'

import { entries } from './../constants/entries'
import { PageHeader } from './../../base/components/PageHeader'

export const BlogPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <LinkSection>
        {Object.entries(entries).map(([key, value]) => (
          <ContentLink key={key}>
            <Link to={`/blog/${key}`}>
              {value.title}
              <Text>{value.publishDate}</Text>
            </Link>
          </ContentLink>
        ))}
      </LinkSection>
    </>
  )
}
