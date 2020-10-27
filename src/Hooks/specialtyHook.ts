import { useState  } from 'react';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import {  } from '../redux/actions/SpecialtyActions';

interface ISpecialty {
  id?:number,
  name:string,
  image:string
}

type optionModal = 'add'| 'delete'|'update';

const SpecialtyHook = () => {
  const { specialtys } = useSelector(({specialty}) => specialty);
  const dispatch = useDispatch();
  //STATES
  const [existSpecialty,setExistSpecialty] = useState(false);

  const [ isOpenAddModal , setOpenModalAdd ] = useState(false);
  const [ isOpenModalEdit , setOpenModalEdit ] = useState(false);
  const [ isOpenModalDelete , setOpenModalDelete ] = useState(false);

  const [ nameSelect , setNameSelect ] = useState('');
  const [ imageSelect , setImageSelect ] = useState('');


  const createSpecialty = (specialty:ISpecialty) => {
    specialtys.map( e => {
      if(e.name==specialty.name){
        setExistSpecialty(true);
        return;
      }

    })
    //Comprobar si ya existe la especialidad por nombre
    //Agregar si no existe
    //Enviar mensaje de error si no.
  }
  const updateSpecialty = (specialty:ISpecialty) => {

  }
  const deleteSpecialty = (id:number) => {
    //Crear modal.
    //Abrir modal.
    //Si responde si , se elimina , si responde no , no realiza ningun cambio.

  }

  //CONFIGS 
  const formatToOptionsSelect = () => {
    let specialtys_ = specialtys.splice(0);
    return specialtys_.map( e => ({
      value : specialtys_.id,
      text : specialtys_.name
    }))

  }


  //UPDATE STATES
  const changeExistSpecialty = () => setExistSpecialty(false);
  const changeNameSelect = (value:string) => setNameSelect(value);
  const changeImageSelect = (e) => setImageSelect(e);

  const changeStateModal = (modal : optionModal ,value:boolean) => {
    switch(modal){
      case 'add': setOpenModalAdd(value);break;
      case 'update' : setOpenModalEdit(value);break;
      case 'delete' : setOpenModalDelete(value);break;
      default : return;
    }
    
  }


  const values = {
    specialtys,
    existSpecialty,
    isOpenAddModal,
    isOpenModalEdit,
    isOpenModalDelete,
    nameSelect,
    imageSelect,
    changeExistSpecialty,
    changeStateModal,
    createSpecialty,
    updateSpecialty,
    formatToOptionsSelect,
    changeNameSelect,
    changeImageSelect
  }

  return values
}

export default SpecialtyHook;