import React from 'react';
import { Link } from 'react-router-dom';

//DESIGN
import TableStyles from '../../../styles/table';
import ListStyles from './style';

//HOOKS
import useUserHook from '../../../Hooks/User/userHook';
import useWorkerHook from '../../../Hooks/Worker/workerHook';

const List = () => {

  const {
    users,
    isLoadingInformationUser,
    loadingUsers
  } = useUserHook();

  const {
    openModalAdd
  } = useWorkerHook();

  return (
    <ListStyles.content>
      <ListStyles.title> Lista de usuarios registrados </ListStyles.title>
      <TableStyles.row margin="10px 0" borderRadius="20px" weight={700} >
        <TableStyles.celd> Id </TableStyles.celd>
        <TableStyles.celd> Nombre y Apellido </TableStyles.celd>
        <TableStyles.celd> Username </TableStyles.celd>
        <TableStyles.celd> Distrito </TableStyles.celd>
        <TableStyles.celd> Foto </TableStyles.celd>
        <TableStyles.celd> Accion </TableStyles.celd>
      </TableStyles.row>
      {
        isLoadingInformationUser ? 
        users.map( (e,i) => {
          var br:string = '';

          if ( i===0 ) br = '20px 20px 0 0 '
          else if ( i === (users.length-1) ) br = '0 0 20px 20px' 

          return (
            <TableStyles.row margin='0 0 3px 0' borderRadius={br} key={i}>
              <TableStyles.celd> {e.id} </TableStyles.celd>
              <TableStyles.celd> {e.fullname} </TableStyles.celd>
              <TableStyles.celd> {e.username} </TableStyles.celd>
              <TableStyles.celd> {e.district} </TableStyles.celd>
              <TableStyles.celd> <TableStyles.image src={e.profileImage}/> </TableStyles.celd>
              <TableStyles.celd> 
                <Link 
                  to='/worker'
                  onClick={ () => {
                    openModalAdd();
                    loadingUsers();
                  }}
                > 
                  Convertir en trabajador 
                </Link> </TableStyles.celd>
            </TableStyles.row>
          )

        }) : <TableStyles.row margin="10px 0" borderRadius="20px" weight={700} >  </TableStyles.row>
      }
    </ListStyles.content>
  )
}

export default List;