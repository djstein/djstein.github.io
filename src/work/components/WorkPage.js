import React from 'react'

import { Link } from './../../ui/Link'
import { LinkSection } from './../../ui/LinkSection'
import { Text } from './../../ui/Text'
import { PageHeader } from './../../base/components/PageHeader'

const entries = [
  {
    company: 'Apple',
    start: 'Nov 2018',
    end: 'Present',
    website: 'https://www.apple.com',
    summary: 'Fullstack Web Developer',
  },
  {
    company: 'BentoBox',
    start: 'Mar 2017',
    end: 'Nov 2018',
    website: 'https://www.getbento.com',
    summary: 'Fullstack Engineer',
  },
  {
    company: 'NCSU - OSCAR Labs',
    start: 'Aug 2014',
    end: 'Dec 2016',
    website: 'https://www.ncsu.edu',
    summary: 'Software Developer',
  },
  {
    company: 'BoostOurTeam',
    start: 'Oct 2015',
    end: 'Jan 2017',
    website: '#',
    summary: 'CTO',
  },
  {
    company: 'Sears Holdings',
    start: 'May 2016',
    end: 'Jul 2016',
    website: 'https://searsholdings.com',
    summary: 'Software Development Intern',
  },
  {
    company: 'Principal Financial Group',
    start: 'May 2013',
    end: 'Aug 2015',
    website: 'https://www.principal.com/',
    summary: 'RIS Java Development Intern',
  },
]

export const WorkPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <LinkSection>
        {Object.entries(entries).map(
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
