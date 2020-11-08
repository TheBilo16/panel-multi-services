import React from 'react';
import UserStyles from './style';

//Components 
import Header from '../../components/header';
import List from './List';

//HOOKS
import useUserHook from '../../Hooks/User/userHook';

const User = () => {

  const {
    findUser
  } = useUserHook()

  return (
    <UserStyles.content>
      <Header //InputSearch and date
        onChange={findUser}
      /> 
      <List />
    </UserStyles.content>
  )
}

export default User;