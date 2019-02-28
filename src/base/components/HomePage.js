import React from 'react'
import { PageHeader } from './PageHeader'

import { Text } from './../../ui/Text'

export const HomePage = ({ match, history }) => (
  <>
    <PageHeader match={match} />
    <Text style={{ paddingTop: '1rem' }}>Software engineer @ Apple, Inc.</Text>
  </>
)
