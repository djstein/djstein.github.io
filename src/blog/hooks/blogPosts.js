import { useState, useEffect } from 'react'

export const useBlogPost = fileName => {
  const [blogPostText, setBlogPostText] = useState(null)
  const handleGetBlogPostText = text => {
    setBlogPostText(text)
  }
  useEffect(() => {
    try {
      const filePath = require(`./../posts/${fileName}.md`)
      fetch(filePath)
        .then(response => response.text())
        .then(text => handleGetBlogPostText(text))
    } catch (error) {
      setBlogPostText('Post not found :[')
    }
  }, [blogPostText])

  return blogPostText
}
