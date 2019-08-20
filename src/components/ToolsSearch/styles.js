import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 15px;
  margin-right: 5px;
  svg {
    margin-right: 5px;
  }

  input {
    background: none;
    border: 0;
    &:placeholder {
      color: #b1adb9;
    }
  }
`;
