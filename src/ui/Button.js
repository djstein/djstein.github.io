import styled from 'styled-components'
export const Button = styled.button`
  font-size: 1rem;
  display: block;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0;
  margin-right: 0;

  border-radius: 0;
  border-color: black;
  border-style: solid;
  border-width: 1px;

  background-color: black;
  color: white;

  :hover {
    border-color: #666;
    background-color: #666;
  }

  :active {
    border-color: #666;
    background-color: white;
    color: black;
  }
`
