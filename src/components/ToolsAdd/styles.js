import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

export default styled(Form)`
  display: flex;
  flex-direction: column;
  label {
    color: #170c3a;
    margin: 15px 0 5px;
  }
  input,
  textarea {
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid #ebeaed;
    height: 50px;
    padding: 20px 13px;
    background: #f5f4f6;
    &:placeholder {
      color: #b1adb9;
    }
  }
  span {
    font-size: 14px;
    color: #f95e5a;
  }
  textarea {
    height: 100%;
  }
  button {
    align-self: flex-end;
    width: 170px;
    margin: 20px 0;
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
