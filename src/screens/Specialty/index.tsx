import React from 'react';

//UIComponents
import SpecialtyStyles from './style';
import { FaTrash , FaEdit } from 'react-icons/fa';

//Components
import Header from '../../components/header';


//HOOKS
import SpecialtyHook from '../../Hooks/specialtyHook';

//MODALS
import { AddModal } from '../../modals/Specialty/addModal';

const Specialty = () => {
  
  const { specialtys , changeStateModal , isOpenAddModal , isOpenModalEdit , isOpenModalDelete } = SpecialtyHook();

  const openModalDelete = () => changeStateModal('delete',true);
  const closeModalDelete = () => changeStateModal('delete',false);

  const openModalEdit = () => changeStateModal('update',true);
  const closeModalEdit = () => changeStateModal('update',false);

  const openModalAdd = () => changeStateModal('add',true);
  const closeModalAdd = () => changeStateModal('add',false); 


  return(
    <SpecialtyStyles.container>
        <AddModal isOpen={isOpenAddModal} handleClose={closeModalAdd}/>
      <Header 
        onChange={()=>{ console.log("Buscando especialidad por nombre") }}
      />
      <SpecialtyStyles.title> Lista de especialidades </SpecialtyStyles.title>
      <button onClick={openModalAdd}> Agregar especialidad </button>

      <SpecialtyStyles.Table.row borderRadius = "20px" weight = {600} sizeText="15px" margin="0 0 10px 0" >
        <SpecialtyStyles.Table.celd> ID </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> Name </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> Image </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> Delete </SpecialtyStyles.Table.celd>
        <SpecialtyStyles.Table.celd> Edit </SpecialtyStyles.Table.celd>
      </SpecialtyStyles.Table.row>
      {
        specialtys.map( (e,i) => {
          let border = "";
          if ( i===0 ) border = "20px 20px 0 0";
          else if ( i===specialtys.length-1 ) border = "0 0 20px 20px";

          return (
            <SpecialtyStyles.Table.row borderRadius={border} margin="0 0 3px 0" sizeText="13px" key={i}>
              <SpecialtyStyles.Table.celd> {e.id} </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd> {e.name} </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd> 
                <SpecialtyStyles.Table.image src={e.image}/>
              </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd>
                <FaTrash 
                  color="red" 
                  size={15} 
                  onClick = {openModalDelete}
                />
              </SpecialtyStyles.Table.celd>
              <SpecialtyStyles.Table.celd>
                <FaEdit 
                  color="green" 
                  size={15} 
                  onClick = {openModalEdit}
                />
              </SpecialtyStyles.Table.celd>
            </SpecialtyStyles.Table.row>
          )
        })
      }
    </SpecialtyStyles.container>
    
  )
}

export default Specialty;