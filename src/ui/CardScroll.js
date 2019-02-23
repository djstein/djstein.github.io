import styled from 'styled-components'

export const CardScroll = styled.div`
  display: flex;
  padding-left: 0.5rem;

  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  width: 100%;

  :after {
    content: '';
    flex: 0 0 1rem;
  }

  div:last-child {
    margin-right: 0rem;
  }
`
