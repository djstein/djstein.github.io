import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { GlobalStyle } from "./../../ui/GlobalStyle"
import { renderRoutes } from "./../routes/renderRoutes"

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>{renderRoutes()}</Switch>
    </BrowserRouter>
  </>
)

export default App
