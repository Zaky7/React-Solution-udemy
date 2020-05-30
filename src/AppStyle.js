import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => (props.showPerson ? 'red' : 'green')};
  font: inherit;
  border: 1px solid transparent;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 18px;
  color: white;

  &:hover {
    background-color: ${props => (props.showPerson ? 'salmon' : 'lightgreen')};
    color: black;
    outline: none !important;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: ${props => (props.personsLength <= 1 ? 'bold' : 'normal')};
  color: ${props => (props.personsLength <= 2 ? 'red' : 'black')};
`;
