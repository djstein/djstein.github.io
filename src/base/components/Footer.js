import React from "react"
import { Footer as StyledFooter } from "./../../ui/Footer"
import { Link } from "./../../ui/Link"
import { Subtitle } from "./../../ui/Subtitle"

export const Footer = () => (
  <StyledFooter>
    <div>
      <Subtitle>Home</Subtitle>
      <Link to="blog">Blog</Link>
      <Link to="photos">Photos</Link>
      <Link to="projects">Projects</Link>
    </div>
    <div>
      <Subtitle>Social</Subtitle>
      <Link to="https://github.com/djstein">GitHub</Link>
      <Link to="https://www.twitter.com/d_j_stein">Twitter</Link>
      <Link to="https://www.instagram.com/d_j_stein">Instagram</Link>
      <Link to="https://www.linkedin.com/in/dylanstein/">LinkedIn</Link>
    </div>
  </StyledFooter>
)
