import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

export default styled(Form)`
  display: flex;
  flex-direction: column;
  input {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  button {
    background: #2980b9;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    padding: 10px;
  }
`;
