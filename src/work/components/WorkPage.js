import React from 'react'

import { Link } from './../../ui/Link'
import { LinkSection } from './../../ui/LinkSection'
import { Text } from './../../ui/Text'
import { PageHeader } from './../../base/components/PageHeader'

const entries = [
  {
    company: 'Principal Financial Group',
    start: '',
    end: '',
    website: 'https://www.principal.com/',
    summary: 'Java Software Development Intern',
  },
  {
    company: 'BentoBox',
    start: '',
    end: '',
    website: '',
    summary: '',
  },
  {
    company: 'Sears Holdings LLC',
    start: '',
    end: '',
    website: '',
    summary: '',
  },
  {
    company: 'NCSU ITNG - OSCAR Labs',
    start: '',
    end: '',
    website: '',
    summary: '',
  },
  {
    company: 'BoostOurTeam',
    start: '',
    end: '',
    website: '',
    summary: '',
  },
]

export const WorkPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <LinkSection>
        {Object.entries(entries).map(([key, { website, company, summary }]) => (
          <Link to={website} key={key}>
            {company}
          </Link>
        ))}
      </LinkSection>
    </>
  )
}
