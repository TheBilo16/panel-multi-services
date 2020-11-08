//REACT
import React ,{ FC } from 'react';

//UIComponents
import ModalStyles from './style';
import { FaEdit } from 'react-icons/fa';
import Input from '../../components/UIComponents/Input';
import InputFile from '../../components/UIComponents/InputFile';
import Modal , { IModal } from '../Modal';

//HOOKS
import SpecialtyHook from '../../Hooks/Specialty/specialtyHook';

export const AddModal:FC<IModal> = ({isOpen,handleClose}) => {

  const { 
    imageSelect,
    addSpecialty, 
    changeImageSelect,
  } = SpecialtyHook();

  return (
      <Modal
        isOpen = {isOpen}
        handleClose={handleClose}
      >
        <ModalStyles.content encType="multipart/form-data" onSubmit={addSpecialty}>
          <ModalStyles.title> Agregar especialidad </ModalStyles.title>
          <Input 
            placeholder="Especialidad" 
            type="text"
            Icon={FaEdit}
            name = 'name'
          />
          <InputFile  
            onChange={changeImageSelect} 
            text = 'Seleccionar imagen'
            name="image"
          />
          <ModalStyles.image src= {imageSelect} />
          <input type="submit"/>
        </ModalStyles.content>
      </Modal>
  )
}

export const EditModal:FC<IModal> = ({isOpen,handleClose}) => {

  const {
    imageSelect,
    specialtyData,
    changeImageSelect,
    editSpecialty,
  } = SpecialtyHook();

  

  return (
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <ModalStyles.content encType='multipart/form-data' onSubmit={editSpecialty}>
          <ModalStyles.title> Agregar especialidad </ModalStyles.title>
          <input type="hidden" name = "id" defaultValue = {specialtyData.id} />
          <Input 
            placeholder="Especialidad" 
            type="text"
            Icon={FaEdit}
            defaultValue={specialtyData.name}
            name="name"
          />
          <InputFile  
            onChange={changeImageSelect} 
            text = 'Seleccionar imagen'
            name="image"
          />
          <ModalStyles.image src={imageSelect||specialtyData.image} />
          <input type='submit' />
        </ModalStyles.content>
      </Modal>
  )
}

export const DeleteModal:FC<IModal> = ({isOpen,handleClose}) => {
  
  const { 
    dropSpecialty, 
    specialtyData
  } = SpecialtyHook();
  
  return(
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <ModalStyles.content onSubmit={dropSpecialty} >
          <ModalStyles.title> 
            {`Deseas eliminar este registro? 
              Se eliminaran todos los trabajadores que hayan 
              sido registrados con esta especialidad`}
          </ModalStyles.title>
          <input type="hidden" name = "id" defaultValue = {specialtyData.id} />
          <ModalStyles.button onClick={handleClose} background="#9e9e9e"> Cancelar </ModalStyles.button>
          <input type="submit" />
      </ModalStyles.content>
    </Modal>
  )
}
