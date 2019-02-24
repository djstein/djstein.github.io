import React from 'react'
import { PageHeader } from './PageHeader'

import { Text } from './../../ui/Text'
// import { CardSection } from './../../ui/CardSection'
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
    {/* <CardSection>
      <Subtitle>Talks</Subtitle>
      <Text>Coming Soon</Text>
    </CardSection>
    <CardSection>
      <Subtitle>Photos</Subtitle>
      <Text>Coming Soon</Text>
    </CardSection> */}
    <div>
      <Subtitle>About</Subtitle>
      <Text>Dylan Stein is a software engineer @ Apple, Inc.</Text>
    </div>
  </>
)
