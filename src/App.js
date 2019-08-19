import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';

import Tools from './pages/Tools';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <h1>VUTTR</h1>
      <h3>Veru UseFul Tools to Remember</h3>
      <Tools />
    </Provider>
  );
}

export default App;
