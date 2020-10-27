import React , { FC , useEffect , useState } from 'react';
import ReactDOM from 'react-dom';
import { nodeModal } from '../configPortal';
import ReactModal from 'react-modal';


// MODULOS DE DISEÑO
import {
  HeaderModal,
  Title,
  FooterModal,
  Button,
  BodyModal,
  Controls,
  GroupControl,
  Icon
} from './style'
import Select from '../../components/UIComponents/Select';
import {BiX} from 'react-icons/bi';
import {FaUserCircle,FaRegClipboard,FaMapMarkerAlt,FaEuroSign} from 'react-icons/fa';

//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { createWorker } from '../../redux/actions/WorkerActions';

interface IWorkerModal {
  isOpen:boolean,
  handleClose():void
}


//STYLES FOR MODAL
const styledOverlay = {
  backgroundColor:"rgba(0,0,0,0.3)"
}

const styledContent = {
  width:"370px",
  height:"auto",
  margin:"0 auto",
  borderRadius:"25px",
  padding:"0",
  display:"flex",
  flexFlow:"column nowrap"
}
//------------------------------

ReactModal.setAppElement("#root");

const WorkerAddModal : FC<IWorkerModal> = ({ isOpen ,handleClose } ) => {

  const [userId,setUserId] = useState(null);
  const [specialtyId,setSpecialtyId] = useState(null);
  const [location,setLocation] = useState(null);
  const [basePrice,setBasePrice] = useState(null);
  const [optionUsers,setOptionUsers] = useState(null);


  const dispatch = useDispatch();
  const { users } = useSelector(({user})=> user );
  const { specialtys } = useSelector(({specialty})=>specialty);
  const { workers } = useSelector(({worker})=>worker);

  //Retorna los usuarios con trabajos.
  const filterUsersWithoutWork = ( users ) => {
    let users_ = users.slice(0);
    let sizeWorkers = workers.length;
    let usersWithoutWork : Array<object> = [];
    users_.map( e => {
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
    return (
      users.map( e => ({
        value : e.id,
        text : e.fullname
      }))
    )
  }
  const formatSpecialtyOption = (specialtys) => {
    return(
      specialtys.map(e=>({
        value:e.id,
        text:e.name
      }))
    )
  }
  const addWorker = () => {
    const worker = { userId , specialtyId , location , basePrice } 
    dispatch(createWorker(worker));
  }

  useEffect(()=>{

  })

  //Setters
  const changeUserId = (e) => setUserId(e.target.value);
  const changeSpecialtyId = (e) => setSpecialtyId(e.target.value);
  const changeUbicacion = (e) => setLocation(e.target.value);
  const changePrice = (e) => setBasePrice(e.target.value); 

  return (
    ReactDOM.createPortal(
      ( 
        <ReactModal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style = { { overlay : styledOverlay  , content : styledContent } }
        >
          <HeaderModal>
            <Title> Nuevo Trabajador </Title>
            <BiX color="gray" size={20} onClick={handleClose}/>
          </HeaderModal>
          <BodyModal>
              <Select 
                Icon ={FaUserCircle}
                onClick={changeUserId}
                options={formatUserOption(filterUsersWithoutWork(users))}
              />
              <Select 
                Icon ={FaRegClipboard}
                onClick={changeSpecialtyId}
                options={formatSpecialtyOption(specialtys)}
              />
     
            <GroupControl>
              <Icon> <FaMapMarkerAlt color="gray" size={20} /> </Icon>
              <Controls as = "input" placeholder="ubicacion" onClick={changeUbicacion}/>
            </GroupControl>
            <GroupControl>
              <Icon> <FaEuroSign color="gray" size={20} /> </Icon>
              <Controls as = "input" placeholder="precio base" onClick={changePrice}/>
            </GroupControl>
          </BodyModal>
          <FooterModal>
            <Button onClick={addWorker}> Crear nuevo trabajador </Button>
          </FooterModal>
        </ReactModal>
      )
    ,nodeModal!)
  )
}
export default WorkerAddModal;