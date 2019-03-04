import React from 'react'
import { Footer } from './../components/Footer'
import { BaseGrid } from './../../ui/BaseGrid'

export const Base = ({ children }) => {
  return (
    <BaseGrid>
      <div style={{ minHeight: '15rem' }}>{children}</div>
      <Footer />
    </BaseGrid>
  )
}
