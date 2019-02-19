import React from "react"
import { Header } from "./../../ui/Header"
import { Card } from "./../../ui/Card"
import { CardScroll } from "./../../ui/CardScroll"
import { Link } from "./../../ui/Link"
import { Section } from "./../../ui/Section"
import { Subtitle } from "./../../ui/Subtitle"

export const HomePage = () => (
  <>
    <Header>Dylan Stein</Header>
    <Section>
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
    </Section>
    <Section>
      <Subtitle>Photos</Subtitle>
      <Link to="photos">See All</Link>
    </Section>
    <Section>
      <Subtitle>Projects</Subtitle>
      <Link to="projects">See All</Link>
    </Section>
  </>
)
