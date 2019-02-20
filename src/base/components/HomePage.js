import React from "react"
import { Header } from "./../../ui/Header"
import { Card } from "./../../ui/Card"
import { CardScroll } from "./../../ui/CardScroll"
import { Link } from "./../../ui/Link"
import { CardSection } from "./../../ui/CardSection"
import { Subtitle } from "./../../ui/Subtitle"

export const HomePage = () => (
  <>
    <Header>Dylan Stein</Header>
    <CardSection>
      <Subtitle>Blog</Subtitle>
      <Link to="blog">See All</Link>
      <CardScroll>
        <Card>
          <Subtitle>Blog</Subtitle>
        </Card>
        <Card>
          <Subtitle>Blog</Subtitle>
        </Card>
      </CardScroll>
    </CardSection>
    <CardSection>
      <Subtitle>Photos</Subtitle>
      <Link to="photos">See All</Link>
    </CardSection>
    <CardSection>
      <Subtitle>Projects</Subtitle>
      <Link to="projects">See All</Link>
    </CardSection>
  </>
)
