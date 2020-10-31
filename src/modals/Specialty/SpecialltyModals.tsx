//REACT
import React ,{ FC } from 'react';

//UIComponents
import ModalStyles from './style';
import { FaEdit } from 'react-icons/fa'
import Select from '../../components/UIComponents/Select';
import Input from '../../components/UIComponents/Input';
import Modal , { IModal } from '../Modal';

//HOOKS
import SpecialtyHook from '../../Hooks/specialtyHook';

export const AddModal:FC<IModal> = ({isOpen,handleClose}) => {

  const { 
    messageShow, 
    imageSelect,
    nameSelect,
    addSpecialty, 
    changeNameSelect,
    changeImageSelect,
  } = SpecialtyHook();

  return (
      <Modal
        isOpen = {isOpen}
        handleClose={handleClose}
      >
        <ModalStyles.content>
          <ModalStyles.title> Agregar especialidad </ModalStyles.title>
          <Input 
            placeholder="Especialidad" 
            type="text" 
            onChange={ (e) => { changeNameSelect(e.target.value) }} 
            Icon={FaEdit}
            value={nameSelect}
          />
          <Input 
            placeholder="Image" 
            type="file" 
            onChange={ (e) => { changeImageSelect(e) } } 
            Icon={FaEdit}
          />
          <ModalStyles.image src= {imageSelect} />
          {
            messageShow.text != ''
            ? <ModalStyles.messageAlert fondo={messageShow.fondo} >{messageShow.text}</ModalStyles.messageAlert>
            : null
          } 
          <ModalStyles.button onClick={addSpecialty}> Agregar especialidad </ModalStyles.button>
        </ModalStyles.content>
      </Modal>
  )
}

export const EditModal:FC<IModal> = ({isOpen,handleClose,extraInformation = {  } }) => {

  const { id , name , image } = extraInformation;

  const {
    messageShow,
    nameSelect,
    imageSelect,
    changeNameSelect,
    changeImageSelect,
    updateSpecialty,
    changeIdSpecialty
  } = SpecialtyHook();

  const editSpecialty = () => {

  }
  

  return (
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <ModalStyles.content>
          <ModalStyles.title> Agregar especialidad </ModalStyles.title>
          <Input 
            placeholder="Especialidad" 
            type="text" 
            onChange={ (e) => { changeNameSelect(e.target.value) }} 
            Icon={FaEdit}
            value={name||nameSelect}
          />
          <Input 
            placeholder="Image" 
            type="file" 
            onChange={ (e) => { changeImageSelect(e) } } 
            Icon={FaEdit}
            
          />
          <ModalStyles.image src= {image||imageSelect} />
          {
            messageShow.text != ''
            ? <ModalStyles.messageAlert fondo={messageShow.fondo} >{messageShow.text}</ModalStyles.messageAlert>
            : null
          } 
          <ModalStyles.button onClick={editSpecialty}> Agregar especialidad </ModalStyles.button>
        </ModalStyles.content>
      </Modal>
  )
}

export const DeleteModal:FC<IModal> = ({isOpen,handleClose,extraInformation}) => {
  
  const { 
    dropSpecialty 
  } = SpecialtyHook();
  
  const id = extraInformation;

  return(
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <ModalStyles.content >
          <ModalStyles.title> 
            {`Deseas eliminar este registro? 
              Se eliminaran todos los trabajadores que hayan 
              sido registrados con esta especialidad`}
          </ModalStyles.title>

          <ModalStyles.button onClick={handleClose} background="#9e9e9e"> Cancelar </ModalStyles.button>
          <ModalStyles.button onClick={()=>{ dropSpecialty(id);handleClose() }} background="#b71c1c"> Eliminar </ModalStyles.button>

      </ModalStyles.content>
    </Modal>
  )
}

