import React from 'react';
import GlobalStyles from './styles/global';

//Redux
import { Provider } from "react-redux";
import store from './redux';
import Router from './router';

function App() {
  return <>
    <GlobalStyles />
    <Provider store={store}>
      <Router />
    </Provider>
  </>;
}

export default App;
