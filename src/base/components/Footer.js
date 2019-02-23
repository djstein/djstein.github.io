import React from 'react'
import { Footer as StyledFooter } from './../../ui/Footer'
import { Link } from './../../ui/Link'

export const Footer = () => (
  <StyledFooter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/blog/">Blog</Link>
    </div>
    <div>
      <Link to="https://github.com/djstein">GitHub</Link>
      <Link to="https://www.twitter.com/d_j_stein">Twitter</Link>
      <Link to="https://www.instagram.com/d_j_stein">Instagram</Link>
      <Link to="https://www.linkedin.com/in/dylanstein/">LinkedIn</Link>
    </div>
  </StyledFooter>
)
