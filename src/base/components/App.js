import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from './../routes/renderRoutes'
import { GlobalStyle } from './../../ui/GlobalStyle'
import { Theme } from './../../ui/Theme'
import { DarkTheme } from './../../ui/DarkTheme'

let inUseTheme = Theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  inUseTheme = DarkTheme
}

function App() {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      <GlobalStyle theme={inUseTheme} />
      <ThemeProvider theme={inUseTheme}>
        <BrowserRouter>
          <Switch>{renderRoutes()}</Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
