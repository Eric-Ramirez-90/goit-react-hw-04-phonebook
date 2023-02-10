import styled from '@emotion/styled';

export const Container = styled.div`
  width: 350px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;

  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :focus {
    outline: 3px solid lightblue;
  }
`;
