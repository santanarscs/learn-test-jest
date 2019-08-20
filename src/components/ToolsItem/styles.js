import styled from 'styled-components';
import { darken } from 'polished';

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
  p {
    padding: 20px 0;
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

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;
export const ActionsModal = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  margin-left: 10px;
  border: 0;
  border-radius: 5px;
  padding: 14px 0;
  width: 140px;
  color: #fff;
  background: ${props => props.color};
  transition: ease-in 0.2s;
  &:hover {
    background: ${props => darken(0.2, props.color)};
  }
`;
