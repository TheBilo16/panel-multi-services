import { useEffect, useState  } from 'react';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { 
  createSpecialty,
  updateSpecialty,
  deleteSpecialty,
  loadingInformationSpecialty,
  update_selected_data
} from '../../redux/actions/SpecialtyActions';

interface ISpecialty {
  id : number ,
  name : string,
  image : string
}

const SpecialtyHook = () => {

  const { specialtys , specialtySelectedData , loadingInformation } = useSelector(({specialty}) => specialty);
  const specialtysI = specialtys.slice();
  let specialtyData : ISpecialty = specialtySelectedData; 
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(!loadingInformation) dispatch(loadingInformationSpecialty());
  })

  //STATES
  const [ imageSelect , setImageSelect ] = useState<string>('');

  const readFile = (file) => {
    return new Promise((res,rej)=>{
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = e => {
        res(e.target?.result);
      }
      fr.onerror = e => {
        rej(e.target?.error);
      }

    })
  } 

  //#region CRUD PARA ESPECIALIDAD.
  const addSpecialty =  (e) => {
    e.preventDefault();
    let formRecibed = e.target;
    let form = new FormData(formRecibed);
    dispatch(createSpecialty(form));
  }
  const editSpecialty = (e) => {
    e.preventDefault();
    let formRecibed = e.target;
    let form = new FormData(formRecibed);
    dispatch(updateSpecialty(form));
  }
  const dropSpecialty = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let formRecibed = e.target;
    let form = new FormData(formRecibed);
    dispatch(deleteSpecialty(form));
  }

  //#endregion




  const changeImageSelect = (e) => {
    let image = e.target.files[0]
    readFile(image)
    .then( (e : any)=> {
      setImageSelect(e);
    })
    .catch( e =>{
      alert('no se pudo cargar la imagen');
    })
  }


  const loadingSpecialty = () => { dispatch(loadingInformationSpecialty()) };
  const changeSpecialtyData = (data) => { dispatch(update_selected_data(data)) }

  const values = {
    specialtysI,
    imageSelect,
    specialtyData,
    addSpecialty,
    editSpecialty,
    dropSpecialty,
    changeImageSelect,
    loadingSpecialty,
    changeSpecialtyData
  }

  return values
}

export default SpecialtyHook;