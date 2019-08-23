import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Loading = styled.div`
  align-self: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  color: #b1adb9;
  font-size: 26px;
`;

export const EmptyData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b1adb9;
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 1px;
  svg {
    margin-bottom: 10px;
  }
`;
