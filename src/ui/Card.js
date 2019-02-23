import styled from 'styled-components'

export const Card = styled.div`
  background-image: linear-gradient(to bottom, black, #333);
  color: ${props => props.theme.title};
  height: 10rem;
  flex: 0 0 100%;
  z-index: 1;
  margin: 0.5rem;
  max-width: 20.5rem;
`
