import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import store from './store';

import GlobalStyle from './styles/global';

import Tools from './pages/Tools';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Tools />
    </Provider>
  );
}

export default App;
