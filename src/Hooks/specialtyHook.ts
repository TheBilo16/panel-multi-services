import { useEffect, useState  } from 'react';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { createSpecialty,updateSpecialty,deleteSpecialty ,loadingInformationSpecialty} from '../redux/actions/SpecialtyActions';

interface ISpecialty {
  id:number,
  name:string,
  image:string
}


interface IMessageShow {
  text : string,
  fondo : string
}

type optionModal = 'add'| 'delete'|'update';

const SpecialtyHook = () => {

  const { specialtys } = useSelector(({specialty}) => specialty);
  const specialtysI = specialtys.slice();
  const dispatch = useDispatch();
  
  useEffect(()=>{

  })

  //STATES

  const [ messageShow,setMessageShow] = useState<IMessageShow>({text:'',fondo:''}); 

  const [ isOpenAddModal , setOpenModalAdd ] = useState<boolean>(false);
  const [ isOpenModalEdit , setOpenModalEdit ] = useState<boolean>(false);
  const [ isOpenModalDelete , setOpenModalDelete ] = useState<boolean>(false);

  const [ nameSelect , setNameSelect ] = useState<string>('');
  const [ imageSelect , setImageSelect ] = useState<string>('');
  const [ idSelect , setIdSelect ] = useState<number>(0);

  const [ passInformation , setPassInformation ] = useState<any>();

  useEffect(()=>{

  })

  const clearInputs = () => {
    setNameSelect('');
    setImageSelect('');
    setMessageShow({text:'',fondo:''});
  }

  //#region CRUD PARA ESPECIALIDAD.
  const addSpecialty = () => {
    if ( nameSelect && imageSelect ){
      let specialtys_ = {
        name : nameSelect,
        image : imageSelect
      }
      let size = specialtysI.length;
      let existS:boolean;

      specialtysI.forEach( (e,i) => {
        if( e.name == specialtys_.name ){
          existS=true;
          setMessageShow({
            text : 'Ya existe esta especialidad,intente con otra',
            fondo : '#d32f2f'
          });
          return;
        }
        else if( (i == (size-1)) && (!existS) ){
          clearInputs();
          dispatch(createSpecialty(specialtys_));
          setMessageShow({
            text : 'Especialidad creada',
            fondo : '#8bc34a'
          });
        }
      });

    } else {
      setMessageShow({
        text : 'Rellene todos los campos',
        fondo : '#fdd835'
      });
    }
    

  }
  const updateSpecialty = () => {
    if(nameSelect&&imageSelect&&idSelect){
      
    }
  }
  const dropSpecialty = (id:number) => {
    dispatch(deleteSpecialty(id));
    alert('Elemento eliminado');
  }

  //#endregion



  //CONFIGS 


  //UPDATE STATES
  const changeNameSelect = (value:string) => setNameSelect(value);
  const changeIdSpecialty = (value:number) => setIdSelect(value);
  const changePassInformation = (value:any) => setPassInformation(value);

  const changeImageSelect = (e) => {
    let image = e.target.files[0];
    let name = URL.createObjectURL(image);
    setImageSelect(name)
  }

  const changeStateModal = (modal : optionModal ,value:boolean) => {
    switch(modal){
      case 'add': setOpenModalAdd(value);break;
      case 'update' : setOpenModalEdit(value);break;
      case 'delete' : setOpenModalDelete(value);break;
      default : return;
    }
    
  }

  const loadingSpecialty = () => dispatch(loadingInformationSpecialty());

  const values = {
    specialtysI,
    messageShow,
    isOpenAddModal,
    isOpenModalEdit,
    isOpenModalDelete,
    nameSelect,
    imageSelect,
    idSelect,
    passInformation,
    changeStateModal,
    addSpecialty,
    updateSpecialty,
    dropSpecialty,
    changeNameSelect,
    changeImageSelect,
    changeIdSpecialty,
    changePassInformation,
    loadingSpecialty
  }

  return values
}

export default SpecialtyHook;