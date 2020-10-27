//REACT
import React ,{ FC } from 'react';

//UIComponents
import ModalStyles from './style';
import { FaEdit } from 'react-icons/fa'
import Select from '../../components/UIComponents/Select';
import Modal , { IModal } from '../Modal';

//HOOKS
import SpecialtyHook from '../../Hooks/specialtyHook';

export const AddModal:FC<IModal> = ({isOpen,handleClose}) => {

  const { 
    nameSelect,
    imageSelect,
    existSpecialty, 
    createSpecialty, 
    updateSpecialty, 
    changeExistSpecialty,
    formatToOptionsSelect,
    changeNameSelect,
    changeImageSelect
    
  } = SpecialtyHook();

  const existSpecialtyMessage = () => setTimeout(changeExistSpecialty,20000);
  if (!existSpecialty) console.log("Usuario incorrecto");


  return (
      <Modal
        isOpen = {isOpen}
        handleClose={handleClose}
      >
        <ModalStyles.content>
          <ModalStyles.title> Agregar especialidad </ModalStyles.title>
          <Select 
            Icon={FaEdit}
            onClick={ (e) => { changeNameSelect(e.target.value) } }
            options={ formatToOptionsSelect() }
          />
        </ModalStyles.content>
      </Modal>
  )
}

export const EditModal:FC<IModal> = ({isOpen,handleClose}) => {
  return (
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
      >
        Modal para editar
      </Modal>
  )
}
