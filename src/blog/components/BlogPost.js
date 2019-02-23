import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { Link } from './../../ui/Link'

import marked from 'marked'
import { default as Highlight } from 'highlight.js'

import { useBlogPost } from './../hooks/blogPosts'
import { entries } from './../constants/entries'
import { Header } from './../../ui/Header'

import { BlogPostContent } from './../../ui/BlogPostContent'
import { ContentHeader } from './../../ui/ContentHeader'
import { BlogPostFooter } from './../../ui/BlogPostFooter'

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

export const BlogPost = ({ match }) => {
  const fileName = match.params.fileName
  const blogPostText = useBlogPost(fileName)
  const { subtitle, title, publishDate } = entries[fileName]
  return (
    <>
      <ContentHeader>
        <Link to="/blog/">Dylan Stein</Link>
        <Header>{title}</Header>
        <p>{subtitle}</p>
        <p>Published: {publishDate}</p>
      </ContentHeader>
      {blogPostText && (
        <BlogPostContent
          dangerouslySetInnerHTML={{
            __html: customMarked(blogPostText),
          }}
        />
      )}
      <BlogPostFooter>Dylan Stein</BlogPostFooter>
    </>
  )
}
