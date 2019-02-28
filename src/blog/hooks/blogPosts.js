import { useState, useEffect } from 'react'

export const useBlogPost = fileName => {
  const [fetched, setFetched] = useState(null)
  const [blogPostText, setBlogPostText] = useState(null)

  const handleGetBlogPostText = text => {
    setBlogPostText(text)
    setFetched(true)
  }

  useEffect(() => {
    try {
      const filePath = require(`./../posts/${fileName}.md`)
      fetch(filePath)
        .then(response => response.text())
        .then(text => handleGetBlogPostText(text))
    } catch (error) {
      setFetched(false)
    }
  }, [blogPostText])

  return [blogPostText, fetched]
}
