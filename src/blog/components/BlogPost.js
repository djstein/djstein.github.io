import React from 'react'
import { Link } from './../../ui/Link'

import marked from 'marked'
import { default as Highlight } from 'highlight.js'

import { useBlogPost } from './../hooks/blogPosts'
import { entries } from './../constants/entries'
import { Header } from './../../ui/Header'
import { ContentSubtitle } from './../../ui/ContentSubtitle'

import { BlogPostContent } from './../../ui/BlogPostContent'
import { ContentHeader } from './../../ui/ContentHeader'

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
  const { subtitle, title } = entries[fileName]
  return (
    <>
      <ContentHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ContentSubtitle>{subtitle}</ContentSubtitle>
          <Link to="/blog/">X</Link>
        </div>

        <Header style={{ color: 'white' }}>{title}</Header>
      </ContentHeader>
      {blogPostText && (
        <BlogPostContent
          dangerouslySetInnerHTML={{
            __html: customMarked(blogPostText),
          }}
        />
      )}
    </>
  )
}
