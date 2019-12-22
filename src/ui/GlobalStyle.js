import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.background};
  margin: 0;
  padding: 0;
  font-family:  sans-serif;
  font-smooth: auto;
  letter-spacing: .125rem;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`
