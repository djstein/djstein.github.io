import React from 'react'

import { PageHeader } from './../../base/components/PageHeader'
import { LinkSection } from './../../ui/LinkSection'
import { Text } from './../../ui/Text'
import { Link } from './../../ui/Link'
import { ContentLink } from '../../ui/ContentLink'
import { entries } from './../constants/entries'

export const EventsPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <LinkSection>
        {Object.entries(entries).map(([key, value]) => (
          <ContentLink key={key}>
            <Link to={`/events/${key}`}>
              {value.title}
              <Text>
                {value.group} | {value.where}
              </Text>
              <Text>{value.publishDate}</Text>
            </Link>
          </ContentLink>
        ))}
      </LinkSection>
    </>
  )
}
