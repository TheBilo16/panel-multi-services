import React , { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Routers
import RouterAuth from './auth';
import RouterNotAuth from './not-auth';

//Components
import RouterSpinner from '../components/RouterSpinner';

//Actions Redux
import { useDispatch , useSelector , shallowEqual } from 'react-redux';
import { checkAuthenticationState } from '../redux/actions/AuthActions';

const Router = () => {
  const { isLoadingInformation , isAuthenticated } = useSelector(({ auth }) => auth , shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticationState());
  }, []);

  if(isLoadingInformation) return <RouterSpinner />

  return <BrowserRouter>
    { isAuthenticated ? <RouterAuth /> : <RouterNotAuth /> }
  </BrowserRouter>
}

export default Router;