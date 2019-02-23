import React from 'react'
import { PageHeader } from './PageHeader'

import { Link } from './../../ui/Link'
import { CardSection } from './../../ui/CardSection'
import { Subtitle } from './../../ui/Subtitle'
import { FeaturedBlogPosts } from './../../blog/components/FeaturedBlogPosts'

export const HomePage = ({ match, history }) => (
  <>
    <PageHeader match={match} />
    <FeaturedBlogPosts
      history={history}
      subtitle="Blog"
      link={{ to: '/blog/', text: 'See All' }}
    />
    <CardSection>
      <Subtitle>Projects</Subtitle>
      <Link to="projects">See All</Link>
    </CardSection>
  </>
)
