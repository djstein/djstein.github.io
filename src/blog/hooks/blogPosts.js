import { useState, useEffect } from 'react'

export const useBlogPost = fileName => {
  const [blogPostText, setBlogPostText] = useState(null)
  const handleGetBlogPostText = text => {
    setBlogPostText(text)
  }
  useEffect(() => {
    const filePath = require(`./../posts/${fileName}.md`)
    fetch(filePath)
      .then(response => response.text())
      .then(text => handleGetBlogPostText(text))
  }, [blogPostText])

  return blogPostText
}
