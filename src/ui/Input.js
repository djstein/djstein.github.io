import styled from 'styled-components'
export const Input = styled.input`
  font-size: 1rem;
  display: block;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 0.5rem;
  padding-top: 1rem;

  border-radius: 0;
  border: none;
  border-bottom-color: ${props => props.theme.input.border};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  color: ${props => props.theme.input.color};
  background-color: ${props => props.theme.input.backgroundColor};
`
