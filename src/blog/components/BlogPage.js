import React from 'react'
import { Header } from './../../ui/Header'
import { Card } from './../../ui/Card'
import { CardScroll } from './../../ui/CardScroll'
import { Link } from './../../ui/Link'
import { CardSection } from '../../ui/CardSection'
import { Subtitle } from './../../ui/Subtitle'
import { LinkSection } from './../../ui/LinkSection'

const blogEntries = [
  {
    title: 'Modern Django',
    subtitle: 'A modern guide on backends',
    publishDate: '2/15/2018',
  },
  {
    title: 'Blog',
    subtitle: 'A different blog post',
    publishDate: '2/13/2018',
  },
]

export const BlogPage = () => (
  <>
    <Header>Blog</Header>
    <CardSection>
      <Subtitle>Featured</Subtitle>
      <CardScroll>
        {blogEntries.map(blog => (
          <Card>
            <Subtitle>{blog.title}</Subtitle>
          </Card>
        ))}
      </CardScroll>
    </CardSection>
    <LinkSection>
      <Subtitle>All Blog Posts</Subtitle>
      {blogEntries.map(blog => (
        <Link to="/blog/value">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3 style={{ margin: '0' }}>{blog.title}</h3>
            <div>{blog.publishDate}</div>
          </div>
          <p>{blog.subtitle}</p>
        </Link>
      ))}
    </LinkSection>
  </>
)
