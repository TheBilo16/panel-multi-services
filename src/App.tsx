import React , { useEffect } from 'react';
import GlobalStyles from './styles/global';

//Redux
import { Provider } from "react-redux";
import store from './redux';
import Router from './router';

const App = () => {
  return <>
    <GlobalStyles />
    <Provider store={store}>
      <Router />
    </Provider>
  </>;
}

export default App;
