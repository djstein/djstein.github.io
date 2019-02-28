import React from 'react'
import { Text } from './../../ui/Text'
// import { Link } from './../../ui/Link'

const year = new Date().getFullYear()

export const ContentFooter = () => {
  return (
    <div
      style={{
        paddingTop: '2rem',
      }}
    >
      <Text>Dylan Stein</Text>
      <Text>© {year} </Text>
    </div>
  )
}
