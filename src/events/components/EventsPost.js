import React from 'react'

import marked from 'marked'
import { default as Highlight } from 'highlight.js'

import { useMarkdownFile } from './../../base/hooks/markdownFile'
import { entries } from './../constants/entries'
import { Header } from './../../ui/Header'
import { Link } from './../../ui/Link'
import { MarkdownFileContent } from './../../ui/MarkdownFileContent'
import { ContentLink } from './../../ui/ContentLink'
import { Text } from './../../ui/Text'
import { PageHeader } from '../../base/components/PageHeader'
import { ContentFooter } from '../../base/components/ContentFooter'

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

export const EventsPost = ({ location, match }) => {
  const fileName = match.params.fileName
  const [markdownText, fetched] = useMarkdownFile(fileName, 'events')
  const { subtitle, title, publishDate, group, where } = entries[fileName]
    ? entries[fileName]
    : {}

  return (
    <>
      <PageHeader match={match} />
      {subtitle && title && publishDate ? (
        <>
          <ContentLink style={{ paddingTop: '2rem' }}>
            <Link to={`/events/${fileName}`}>{title}</Link>
            <Text>
              {group} | {where}
            </Text>
            <Text>{publishDate}</Text>
          </ContentLink>
          {markdownText ? (
            <MarkdownFileContent
              dangerouslySetInnerHTML={{
                __html: customMarked(markdownText),
              }}
            />
          ) : (
            <div style={{ height: '100vh' }} />
          )}
          <div
            style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '2rem' }}
          >
            <Link
              style={{ paddingRight: '1rem', fontWeight: 'bold' }}
              to={`https://github.com/djstein/djstein.github.io/blob/src/src/blog/posts/${fileName}.md`}
            >
              Edit on GitHub
            </Link>
            <Link
              fontWeight={'500'}
              style={{ paddingRight: '1rem', fontWeight: 'bold' }}
              to={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://djstein.github.io/blog/${fileName}`
              )}`}
            >
              Discuss on Twitter
            </Link>
          </div>
        </>
      ) : fetched === false ? (
        <Header>Post not found</Header>
      ) : (
        <div style={{ height: '100vh' }} />
      )}
      {fetched !== null && <ContentFooter />}
    </>
  )
}
