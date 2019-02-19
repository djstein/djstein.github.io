import React from "react"
import { Route } from "react-router"
import { routes } from "./routes"

export const renderRoutes = () =>
  routes.map(({ Layout, Component, path }) => (
    <Route
      key={path}
      path={path}
      exact={true}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  ))
