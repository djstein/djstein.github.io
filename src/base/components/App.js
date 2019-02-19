import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Switch } from "react-router-dom"
import { renderRoutes } from "./../routes/renderRoutes"
import { GlobalStyle } from "./../../ui/GlobalStyle"
import { Theme } from "./../../ui/Theme"

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Switch>{renderRoutes()}</Switch>
      </BrowserRouter>
    </ThemeProvider>
  </>
)

export default App
