import React from 'react';

//UIComponents
import SpecialtyStyles from './style';
import { FaTrash , FaEdit , FaPlus } from 'react-icons/fa';
import TableStyles from '../../styles/table';

//Components
import Header from '../../components/header';

//HOOKS
import SpecialtyHook from '../../Hooks/Specialty/specialtyHook';
import useModalHook from '../../Hooks/Specialty/modalHook';

//MODALS
import { AddModal , EditModal , DeleteModal } from '../../modals/Specialty/SpecialltyModals';

const Specialty = () => {

  const {
    isOpenAddModal,
    isOpenModalEdit , 
    isOpenModalDelete , 
    changeStateModal 

  } = useModalHook();

  const { 
    specialtysI ,
    changeSpecialtyData
  } = SpecialtyHook();


  const openModalDelete = () => changeStateModal('delete',true);
  const closeModalDelete = () => changeStateModal('delete',false);

  const openModalEdit = () => changeStateModal('update',true);
  const closeModalEdit = () => changeStateModal('update',false);
  
  const openModalAdd = () => changeStateModal('add',true);
  const closeModalAdd = () => changeStateModal('add',false); 


  return(
    <SpecialtyStyles.container>
      <AddModal isOpen={isOpenAddModal} handleClose={closeModalAdd}/>
      <EditModal isOpen={isOpenModalEdit} handleClose={closeModalEdit}/>
      <DeleteModal isOpen={isOpenModalDelete} handleClose={closeModalDelete}/>

      <Header 
        onChange={()=>{ console.log("Buscando especialidad por nombre") }}
      />
      <SpecialtyStyles.title> Lista de especialidades </SpecialtyStyles.title>
      
      <SpecialtyStyles.floatButton onClick={openModalAdd} >
        <FaPlus size={20} color="white"/>
      </SpecialtyStyles.floatButton>

      <TableStyles.row margin="10px 0" borderRadius="20px" weight={700} >
        <TableStyles.celd> ID </TableStyles.celd>
        <TableStyles.celd> NAME </TableStyles.celd>
        <TableStyles.celd> IMAGE </TableStyles.celd>
        <TableStyles.celd> DELETE </TableStyles.celd>
        <TableStyles.celd> EDIT </TableStyles.celd>
      </TableStyles.row>

      {
        specialtysI.map( (e,i) => {
          let border = "";
          if ( i===0 ) border = "20px 20px 0 0";
          else if ( i===specialtysI.length-1 ) border = "0 0 20px 20px";

          return (
            <TableStyles.row borderRadius={border} margin="0 0 3px 0" key={i}>
              <TableStyles.celd> {e.id} </TableStyles.celd>
              <TableStyles.celd> {e.name} </TableStyles.celd>
              <TableStyles.celd>
                <TableStyles.image src={e.image} title={e.image}/>
              </TableStyles.celd>
              <TableStyles.celd>
                <FaTrash 
                  size={17} 
                  color="red" 
                  onClick={ () => { 
                    openModalDelete();
                    changeSpecialtyData(e) 
                  }}
                />
              </TableStyles.celd>
              <TableStyles.celd>
                <FaEdit 
                  size={17} 
                  color="blue" 
                  onClick={() => { 
                    openModalEdit();
                    changeSpecialtyData(e) 
                  }}
                />
              </TableStyles.celd>
            </TableStyles.row>
          )
        })
      }
    </SpecialtyStyles.container>
    
  )
}

export default Specialty;