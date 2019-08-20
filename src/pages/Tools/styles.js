import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: 0;
    background: #2980b9;
    padding: 10px;
    color: #fff;
    border-radius: 4px;
  }
`;

export const TitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  button {
    background: none;
    border: 0;
  }
`;
