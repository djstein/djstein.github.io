import React from 'react'
import styled from 'styled-components'

import { NavLink as RouterLink } from 'react-router-dom'

const StyledLink = styled.a`
  color: ${props => (props.color ? props.color : props.theme.link)};
  text-decoration: none;
  padding: 0;
  margin-top: 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight || 'initial'};
`

const StyledRouterLink = styled(RouterLink)`
  color: ${props => props.color || props.theme.link};
  text-decoration: none;
  padding: 0;
  margin-top: 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight || 'initial'};
`

export const Link = ({ to, children, ...rest }) =>
  to.startsWith('https://') || to.startsWith('mailto:') ? (
    <StyledLink href={to} {...rest}>
      {children}
    </StyledLink>
  ) : (
    <StyledRouterLink to={to} {...rest} exact activeClassName="active">
      {children}
    </StyledRouterLink>
  )

StyledLink.defaultProps = {
  fontSize: '1.125rem',
}

StyledRouterLink.defaultProps = {
  fontSize: '1.125rem',
}
