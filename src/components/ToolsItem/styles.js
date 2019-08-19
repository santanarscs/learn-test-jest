import styled from 'styled-components';

export const Container = styled.li`
  line-height: 25px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ebeaed;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  small {
    margin-bottom: 10px;
    font-size: 18px;
    color: #8f8a9b;
  }
  ul {
    li {
      display: inline-block;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  button {
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    color: #f95e5a;
  }
`;
