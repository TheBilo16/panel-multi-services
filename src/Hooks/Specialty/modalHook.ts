import { useState } from 'react';


type optionModal = 'add'| 'delete'|'update';

const useModalHook = () => {
  
  const [ isOpenAddModal , setOpenModalAdd ] = useState<boolean>(false);
  const [ isOpenModalEdit , setOpenModalEdit ] = useState<boolean>(false);
  const [ isOpenModalDelete , setOpenModalDelete ] = useState<boolean>(false);

  const changeStateModal = (modal : optionModal ,value:boolean) => {
    switch(modal){
      case 'add': setOpenModalAdd(value);break;
      case 'update' : setOpenModalEdit(value);break;
      case 'delete' : setOpenModalDelete(value);break;
      default : return;
    }
    
  }

  const values = {
    isOpenAddModal,
    isOpenModalEdit,
    isOpenModalDelete,
    changeStateModal,
  }
  return values;
}


export default useModalHook;