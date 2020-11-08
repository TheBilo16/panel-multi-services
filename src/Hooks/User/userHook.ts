import { useEffect, useState } from 'react';


//REDUX
import { useDispatch,useSelector } from 'react-redux';
import { 
  changeLoadingInformation,
  findByUserName,
  loadingInformationUser
} from '../../redux/actions/UserActions';

const useUserHook = () => {

  const dispatch = useDispatch();
  const { users,isLoadingInformationUser } = useSelector(({user})=>user);

  useEffect(()=>{
    if(!isLoadingInformationUser) dispatch(loadingInformationUser());
  })

  const loadingUsers = () => dispatch(loadingInformationUser());
  const findUser = (e) => dispatch(findByUserName(e.target.value));

  const values = {
    users,
    isLoadingInformationUser,
    findUser,
    loadingUsers
  }
  return values;
}

export default useUserHook;