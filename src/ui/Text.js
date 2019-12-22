import styled from 'styled-components'

export const Text = styled.p`
  color: ${props => props.text || props.theme.text};
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  display: block;
`
