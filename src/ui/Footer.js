import styled from 'styled-components'

export const Footer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 415px) {
    justify-content: space-between;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 415px) {
      margin-right: 2rem;
    }

    a {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
`
