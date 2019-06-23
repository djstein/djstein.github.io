import { useState, useEffect } from 'react'
export const useMarkdownFile = (fileName, dir) => {
  const [fetched, setFetched] = useState(null)
  const [markdownFileText, setMarkdownFileText] = useState(null)

  const handleGetMarkdownFile = text => {
    setMarkdownFileText(text)
    setFetched(true)
  }

  useEffect(() => {
    try {
      const filePath = require(`./../../${dir}/posts/${fileName}.md`)
      fetch(filePath)
        .then(response => response.text())
        .then(text => handleGetMarkdownFile(text))
    } catch (error) {
      setFetched(false)
    }
  }, [markdownFileText])

  return [markdownFileText, fetched]
}
