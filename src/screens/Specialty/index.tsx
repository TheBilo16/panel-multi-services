import React, { useEffect } from 'react';

//UIComponents
import SpecialtyStyles from './style';
import { FaTrash , FaEdit , FaPlus } from 'react-icons/fa';

//Components
import Header from '../../components/header';

//HOOKS
import SpecialtyHook from '../../Hooks/specialtyHook';

//MODALS
import { AddModal , EditModal , DeleteModal } from '../../modals/Specialty/SpecialltyModals';

const Specialty = () => {

  const { 
    passInformation,
    specialtysI , 
    changeStateModal , 
    changePassInformation,
    isOpenAddModal , 
    isOpenModalEdit , 
    isOpenModalDelete , 
    loadingSpecialty
  } = SpecialtyHook();

  useEffect( () => { loadingSpecialty() } );

  const openModalDelete = (information:any) => { 
    changePassInformation(information);
    changeStateModal('delete',true);
  }
  const closeModalDelete = () => changeStateModal('delete',false);

  const openModalEdit = (information:any) => {
    changePassInformation(information);
    changeStateModal('update',true);
  }
  const closeModalEdit = () => changeStateModal('update',false);
  
  const openModalAdd = () => changeStateModal('add',true);
  const closeModalAdd = () => changeStateModal('add',false); 


  return(
    <SpecialtyStyles.container>
      <AddModal isOpen={isOpenAddModal} handleClose={closeModalAdd}/>
      <EditModal isOpen={isOpenModalEdit} handleClose={closeModalEdit} extraInformation={passInformation}/>
      <DeleteModal isOpen={isOpenModalDelete} handleClose={closeModalDelete} extraInformation={passInformation}/>

      <Header 
        onChange={()=>{ console.log("Buscando especialidad por nombre") }}
      />
      <SpecialtyStyles.title> Lista de especialidades </SpecialtyStyles.title>
      
      <SpecialtyStyles.floatButton onClick={openModalAdd} >
        <FaPlus size={20} color="white"/>
      </SpecialtyStyles.floatButton>

      <SpecialtyStyles.Table.row margin="10px 0" borderRadius="20px" weight={700} >
        <SpecialtyStyles.Table.celd> ID </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> NAME </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> IMAGE </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> DELETE </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> EDIT </SpecialtyStyles.Table.celd>
      </SpecialtyStyles.Table.row>

      {
        specialtysI.map( (e,i) => {
          let border = "";
          if ( i===0 ) border = "20px 20px 0 0";
          else if ( i===specialtysI.length-1 ) border = "0 0 20px 20px";

          return (
            <SpecialtyStyles.Table.row borderRadius={border} margin="0 0 3px 0" key={i}>
              <SpecialtyStyles.Table.celd> {e.id} </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd> {e.name} </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd>
                <SpecialtyStyles.Table.image src={e.image} title={e.image}/>
              </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd>
                <FaTrash size={17} color="red" onClick={ () => { openModalDelete(e.id) } }/>
              </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd>
                <FaEdit size={17} color="blue" onClick={() => { openModalEdit(e) } }/>
              </SpecialtyStyles.Table.celd>
            </SpecialtyStyles.Table.row>
          )
        })
      }
    </SpecialtyStyles.container>
    
  )
}

export default Specialty;