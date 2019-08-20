import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 820px) {
    margin: 50px 20px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    background: #365df0;
    color: #fff;
    border: 0;
    padding: 14px 0;
    transition: ease-in 0.2s;
    &:hover {
      background: #2f55cc;
    }
  }
`;

export const TitleModal = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 0;
  button {
    background: none;
    border: 0;
  }
`;
