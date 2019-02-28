import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family:  sans-serif;
  font-smooth: auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`
