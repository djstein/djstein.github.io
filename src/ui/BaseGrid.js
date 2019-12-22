import styled from 'styled-components'

export const BaseGrid = styled.div`
  background-color: ${props => props.theme.background};
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 415px) {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }
`
