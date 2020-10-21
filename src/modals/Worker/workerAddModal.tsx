import React , { FC , useEffect } from 'react';
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
import {BiX} from 'react-icons/bi';
import {FaUserCircle,FaRegClipboard,FaMapMarkerAlt,FaEuroSign} from 'react-icons/fa';

//REDUX
import { useDispatch , useSelector } from 'react-redux';

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


  const dispatch = useDispatch();
  const { users } = useSelector(({user})=> user );
  console.log(users);

  useEffect(()=>{
    console.log("Cargando datos de combo box");
  })

  const createWorker = () => {

  }

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

            <GroupControl>
              <Icon> <FaUserCircle color="gray" size={20} /> </Icon>
              <Controls as = "select">
                <option> Seleccione al usuario </option>
              </Controls>
            </GroupControl>
            

            <GroupControl>
              <Icon> <FaRegClipboard color="gray" size={20} /> </Icon>
              <Controls as = "select">
                <option> Seleccione una especialidad </option>
              </Controls>
            </GroupControl>
            
            
            <GroupControl>
              <Icon> <FaMapMarkerAlt color="gray" size={20} /> </Icon>
              <Controls as = "input" placeholder="ubicacion"/>
            </GroupControl>
            <GroupControl>
              <Icon> <FaEuroSign color="gray" size={20} /> </Icon>
              <Controls as = "input" placeholder="precio base"/>
            </GroupControl>
          </BodyModal>
          <FooterModal>
            <Button onClick={createWorker}> Crear nuevo trabajador </Button>
          </FooterModal>
        </ReactModal>
      )
    ,nodeModal!)
  )
}



export default WorkerAddModal;