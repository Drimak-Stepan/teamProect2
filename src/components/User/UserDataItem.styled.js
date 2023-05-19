import styled from 'styled-components';

export const UserInput = styled.input`
  width: 190px;
  border: 1px solid ${props => props.theme.colors.link};
  border-radius: 20px;
  padding: 4px 12px;
  color: ${props => props.theme.colors.titleColor};
`;

export const EditInputBtn = styled.button`
  position: absolute;
  right: 28px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    right: 10px;
  }
`;

export const UserLabel = styled.label`
  color: ${props => props.theme.colors.titleColor};
`