import React, { useContext } from 'react'
import { Link } from './../../ui/Link'
import { Button } from './../../ui/Button'
import { ThemeContext } from '../context/ThemeContext'

export const PageHeader = ({ match, history }) => {
  const { theme, switchTheme } = useContext(ThemeContext)
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
      <Link to={'/'} fontSize={'1.5rem'} fontWeight={'500'}>
        Dylan Stein
      </Link>
      {match.path !== '/' && (
        <Link to={`/${basePath}/`} fontSize={'1.5rem'} fontWeight={'500'}>
          {basePath[0].toUpperCase() + basePath.slice(1)}
        </Link>
      )}
      <>
        <Button onClick={() => switchTheme()}>
          {theme.theme === 'dark' ? 'light' : 'dark'}
        </Button>
      </>
    </div>
  )
}
