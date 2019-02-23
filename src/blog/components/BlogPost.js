import React from 'react'

import marked from 'marked'
import { default as Highlight } from 'highlight.js'

import { useBlogPost } from './../hooks/blogPosts'
import { entries } from './../constants/entries'
import { Header } from './../../ui/Header'
import { Subtitle } from './../../ui/Subtitle'
import { Link } from './../../ui/Link'
import { Text } from './../../ui/Text'
import { BlogPostContent } from './../../ui/BlogPostContent'
import { ContentHeader } from './../../ui/ContentHeader'
import { BlogPostFooter } from './../../ui/BlogPostFooter'
import { PageHeader } from '../../base/components/PageHeader'

const customMarked = marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => Highlight.highlightAuto(code).value,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

export const BlogPost = ({ location, match }) => {
  const fileName = match.params.fileName
  const blogPostText = useBlogPost(fileName)
  const { subtitle, title, publishDate } = entries[fileName]
    ? entries[fileName]
    : {}
  return (
    <>
      <PageHeader match={match} />
      {subtitle && title && publishDate && blogPostText ? (
        <>
          <ContentHeader>
            <Header>{title}</Header>
          </ContentHeader>
          <Text>{subtitle}</Text>
          <Text>Published: {publishDate}</Text>
          <BlogPostContent
            dangerouslySetInnerHTML={{
              __html: customMarked(blogPostText),
            }}
          />
          <Link
            to={`https://github.com/djstein/djstein.github.io/blob/master/src/blog/posts/${fileName}.md`}
          >
            Edit on GitHub
          </Link>
          <Link
            to={`https://mobile.twitter.com/search?q=${encodeURIComponent(
              `https://djstein.github.io/blog/${fileName}`
            )}`}
          >
            Discuss on Twitter
          </Link>
        </>
      ) : (
        <Header>Post not found</Header>
      )}
      <BlogPostFooter>
        <Subtitle>Dylan Stein</Subtitle>
      </BlogPostFooter>
    </>
  )
}
