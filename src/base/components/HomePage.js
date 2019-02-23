import React from 'react'
import { Header } from './../../ui/Header'
import { Link } from './../../ui/Link'
import { CardSection } from './../../ui/CardSection'
import { Subtitle } from './../../ui/Subtitle'
import { FeaturedBlogPosts } from './../../blog/components/FeaturedBlogPosts'

export const HomePage = ({ history }) => (
  <>
    <Header>Dylan Stein</Header>
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
