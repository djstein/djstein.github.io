import React from 'react'

import { Inquiries } from './Inquiries'

import { Header } from './../../ui/Header'
import { Link } from './../../ui/Link'
import { LinkSection } from './../../ui/LinkSection'
import { Text } from './../../ui/Text'
import { PageHeader } from './../../base/components/PageHeader'
import { work } from './../constants/work'

export const WorkPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <Inquiries />
      <LinkSection>
        <Header>Experience</Header>
        {Object.entries(work).map(
          ([key, { website, company, summary, start, end }]) => (
            <Link to={website} key={key}>
              <Text style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                {company}
              </Text>
              <Text>{summary}</Text>
              <Text>
                {start} - {end}
              </Text>
            </Link>
          )
        )}
      </LinkSection>
    </>
  )
}
