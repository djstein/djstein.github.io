import React from 'react'

import { Text } from './../../ui/Text'
import { PageHeader } from './../../base/components/PageHeader'

export const EventsPage = ({ match }) => {
  return (
    <>
      <PageHeader match={match} />
      <Text style={{ paddingTop: '1rem' }}>
        Currently scheduling events for the end of March! Check back for
        updates.
      </Text>
    </>
  )
}
