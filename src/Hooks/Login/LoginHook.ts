import {useState} from 'react';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { validationUser } from '../../redux/actions/AuthActions';

const useLoginHook = () => {
  
  const dispatch = useDispatch();

  const authentication = (e) => {
    let form = new FormData(e.target);
    dispatch(validationUser(form));
  }

  const values = {
      authentication
  }

  return values;
}

export default useLoginHook;