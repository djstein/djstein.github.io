import React from 'react'
import { Link } from './../../ui/Link'

export const PageHeader = ({ match, history }) => {
  const basePath = match.path.split('/')[1]
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <Link to={'/'} fontSize={'1.5rem'} color={'black'} fontWeight={'500'}>
        Dylan Stein
      </Link>
      {match.path !== '/' && (
        <Link to={`/${basePath}/`} fontSize={'1.5rem'} fontWeight={'500'}>
          {basePath[0].toUpperCase() + basePath.slice(1)}
        </Link>
      )}
    </div>
  )
}
