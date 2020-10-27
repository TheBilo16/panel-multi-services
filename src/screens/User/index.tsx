import React from 'react';
import { Content } from './style';

//REDUX
import { useDispatch  } from 'react-redux';
import { findByUserName } from '../../redux/actions/UserActions';

//Components 
import Header from '../../components/header';
import List from './List';

const User = () => {

  const dispatch = useDispatch();

  return (
    <Content>
      <Header //InputSearch and date
        onChange={(e)=>{ dispatch(findByUserName(e.target.value)) }}
      /> 
      <List />
    </Content>
  )
}

export default User;