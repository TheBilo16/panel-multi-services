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
import { loadingInformationUser } from '../redux/actions/UserActions';
import { loadingWorkers } from '../redux/actions/WorkerActions';
import { loadingInformationSpecialty } from '../redux/actions/SpecialtyActions';

const Router = () => {
  const { isLoadingInformation , isAuthenticated } = useSelector(({ auth }) => auth , shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingInformationUser());
    dispatch(loadingWorkers());
    dispatch(checkAuthenticationState());
    dispatch(loadingInformationSpecialty());
  }, []);

  if(isLoadingInformation) return <RouterSpinner />

  return <BrowserRouter>
    { isAuthenticated ? <RouterAuth /> : <RouterNotAuth /> }
  </BrowserRouter>
}

export default Router;