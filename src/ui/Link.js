import React from "react"
import styled from "styled-components"

import { NavLink as RouterLink } from "react-router-dom"

const StyledLink = styled.a`
  color: ${props => props.theme.link};
  text-decoration: none;
`

const StyledRouterLink = styled(RouterLink)`
  color: ${props => props.theme.link};
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
`

export const Link = ({ to, children, ...rest }) =>
  to.startsWith("https://") || to.startsWith("mailto:") ? (
    <StyledLink href={to}>{children}</StyledLink>
  ) : (
    <StyledRouterLink to={to} {...rest} exact activeClassName="active">
      {children}
    </StyledRouterLink>
  )
