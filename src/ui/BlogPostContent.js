import styled from 'styled-components'

export const BlogPostContent = styled.div`
  color: ${props => props.theme.text};
  padding-top: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  p {
    font-size: 1.125rem;
  }
  ul {
    padding-left: 1rem;
    li {
      padding-bottom: 0.5rem;
    }
  }
`
