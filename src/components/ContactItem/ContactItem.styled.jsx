import styled from '@emotion/styled';

export const DataConteiner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 2px 10px;

  font-size: 14px;

  background-color: white;

  border: none;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  cursor: pointer;

  :hover,
  :focus {
    background-color: red;
  }
`;
