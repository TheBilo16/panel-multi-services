import React , {useEffect} from 'react';
import { Content } from './style';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { loadingInformationUser , findByUserName } from '../../redux/actions/UserActions';

//Components 
import Header from '../../components/header';
import List from './List';

const User = () => {

  const dispatch = useDispatch();
  const { isLoadingInformation } = useSelector( ({user}) => user )
  
  // 

  useEffect(()=>{
    if (!isLoadingInformation) dispatch(loadingInformationUser()) //Cargar datos y actualizar estado a true.
  })

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