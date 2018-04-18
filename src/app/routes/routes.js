import DashboardContainer from '../containers/DashboardContainer'
import AboutContainer from '../containers/AboutContainer'
import LoginContainer from '../containers/LoginContainer'

import NavBarLayout from '../layouts/NavBarLayout'

export const routes = [
  {
    path: '/',
    exact: true,
    Component: DashboardContainer,
    Layout: NavBarLayout
  },
  {
    path: '/about',
    exact: true,
    Component: AboutContainer,
    Layout: NavBarLayout
  },
  {
    path: '/login',
    exact: true,
    Component: LoginContainer,
    Layout: NavBarLayout
  }
]
