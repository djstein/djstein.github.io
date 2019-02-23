import React from 'react'
import styled from 'styled-components'

import { NavLink as RouterLink } from 'react-router-dom'

const StyledLink = styled.a`
  color: ${props => (props.color ? props.color : props.theme.link)};
  text-decoration: none;
  padding: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0;
  font-size: ${props => props.fontSize};
  :hover {
    text-decoration: underline;
  }
`

const StyledRouterLink = styled(RouterLink)`
  color: ${props => props.color || props.theme.link};
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  padding: 0;
  margin-top: 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight || 'initial'}
  :hover {
    text-decoration: underline;
  }
`

export const Link = ({ to, children, ...rest }) =>
  to.startsWith('https://') || to.startsWith('mailto:') ? (
    <StyledLink href={to}>{children}</StyledLink>
  ) : (
    <StyledRouterLink to={to} {...rest} exact activeClassName="active">
      {children}
    </StyledRouterLink>
  )

StyledLink.defaultProps = {
  fontSize: '1rem',
}

StyledRouterLink.defaultProps = {
  fontSize: '1rem',
}
