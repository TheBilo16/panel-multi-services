import React , {useState,useEffect} from 'react';
import { 
  Content,
  Title,
  Register,
  Celd,
  ImageUser
} from './style';

//REDUX
import { useSelector } from 'react-redux';

const List = () => {

  const { users , isLoadingInformation } = useSelector( ({user}) => user ) // Usuarios en el store.

  return (
    <Content>
      <Title> Lista de usuarios registrados </Title>
      <Register border='20px' margin='0 0 20px 0' HEADER>
        <Celd> Id </Celd>
        <Celd> Nombre y Apellido </Celd>
        <Celd> Username </Celd>
        <Celd> Foto </Celd>
        <Celd> Accion </Celd>
      </Register>
      {
        isLoadingInformation ? 
        users.map( (e,i) => {
          var br:string;

          if ( i==0 ) br = '20px 20px 0 0 '
          else if ( i == (users.length-1) ) br = '0 0 20px 20px' 

          return (
            <Register border = {br!} margin = '0 0 2px 0' key={i} BODY>
              <Celd> {e.id} </Celd>
              <Celd> {e.fullname} </Celd>
              <Celd> {e.username} </Celd>
              <Celd> <ImageUser src={e.profileImage}/> </Celd>
              <Celd> <button> Convertir en trabajador </button> </Celd>
            </Register>
          )

        }) : <Register>  </Register>
      }
    </Content>
  )
}

export default List;