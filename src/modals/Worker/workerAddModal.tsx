import React , { FC } from 'react';

//Design 
import Modal , { IModal } from '../Modal';
import ModalStyles from './style';

import Input from '../../components/UIComponents/Input';
import Select from '../../components/UIComponents/Select';
import { BiX } from 'react-icons/bi';
import {FaUserCircle,FaRegClipboard,FaMapMarkerAlt,FaEuroSign} from 'react-icons/fa';

//HOOKS
import useWorkerHook from '../../Hooks/Worker/workerHook';
import useUserHook from '../../Hooks/User/userHook';
import SpecialtyHook from '../../Hooks/Specialty/specialtyHook';

interface IOptionSelect {
  value : string,
  text  : string
}

const WorkerAddModal : FC<IModal> = ({ isOpen ,handleClose } ) => {

  const {
    workers,
    addWorker,
    closeModalAdd,
  } = useWorkerHook();

  const {
    users
  } = useUserHook();

  const {
    specialtysI
  } = SpecialtyHook()

  //Retorna los usuarios con trabajos.
  const filterUsersWithoutWork = ( users ) => {
    let sizeWorkers = workers.length;
    let usersWithoutWork : Array<object> = [];

    if (sizeWorkers <= 0) return users;
    users.map( e => {
      let p = 0;
      for(let i=0;i<sizeWorkers;i++){
        if( e.fullname != workers[i].fullname ){
          p++;
          if (p==sizeWorkers) usersWithoutWork.push(e);
        } else return;
      }
    })
    return usersWithoutWork;
  }



  const formatUserOption = (users) => {
    let usersOptions : Array<IOptionSelect> = [];
    users.map( e => {
      usersOptions.push({
        value : e.id,
        text : e.fullname
      })
    })
    return usersOptions;
  }
  const formatSpecialtyOption = (specialtys) => {
    let specialtyOption : Array<IOptionSelect> = [];
    specialtys.map( e =>{
      specialtyOption.push({
        value : e.id,
        text : e.name
      });
    })
    return specialtyOption
  }

  return (
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
        >
          <ModalStyles.content encType='multipart/form-data' onSubmit={(e)=>{ addWorker(e);closeModalAdd()}} >
            <ModalStyles.header>
              <ModalStyles.title> Nuevo Trabajador </ModalStyles.title>
              <BiX color="gray" size={20} onClick={handleClose}/>
            </ModalStyles.header>
            <ModalStyles.body >
                <Select 
                  Icon ={FaUserCircle}
                  options={formatUserOption(filterUsersWithoutWork(users))}
                  name = 'userId'
                />
                <Select 
                  Icon ={FaRegClipboard}
                  options={formatSpecialtyOption(specialtysI)}
                  name = 'specialtyId'
                />
                <Input 
                  placeholder = 'Precio Base'
                  Icon = {FaEuroSign}
                  type = 'number'
                  name = 'basePrice'
                />
            </ModalStyles.body>
            <ModalStyles.footer>
              <ModalStyles.button 
                type = 'submit' 
                value='Crear un nuevo trabajador'
              />
            </ModalStyles.footer>
          </ModalStyles.content>
        </Modal>
        
      )
}
export default WorkerAddModal;