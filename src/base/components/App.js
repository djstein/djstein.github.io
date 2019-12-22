import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from './../routes/renderRoutes'
import { GlobalStyle } from './../../ui/GlobalStyle'
import ThemeContextProvider, { ThemeContext } from '../context/ThemeContext'

export default function App() {
  return (
    <ThemeContextProvider>
      <ThemeContextWrapper />
    </ThemeContextProvider>
  )
}

function ThemeContextWrapper() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>{renderRoutes()}</Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
