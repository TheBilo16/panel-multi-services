import React , {useState} from 'react';
import {
  Content,
  ItemWorker,
  ContentImage,
  Image,
  DescriptionWorker,
  Text,
  Puntuacion,
  Star,
  Next,
  TitleList,
  IconTitle
} from './style'
import { FaStar , FaAngleRight , FaPlus } from 'react-icons/fa';

//REDUX
import { useSelector , useDispatch } from 'react-redux';
import { 
  updateWorkerSelected , 
  updateWorkerSelectedData , 
} from '../../../redux/actions/WorkerActions';

//MODALS
import WorkerAddModal from '../../../modals/Worker/workerAddModal';

const List = () => {

  const dispatch = useDispatch();
  const { isWorkerSelected , workers , isLoadingInformation } = useSelector( ({worker}) => worker ) ;
  const [ modalAddState, setModalAddState ] = useState(false);

  // Abrir y cerrar modals
  const closeModal = () => setModalAddState(false);
  const openModal = () => setModalAddState(true);


  return (
    <Content> 
      <TitleList>
        <Text TITLE> Trabajadores </Text>
        <IconTitle>
          <FaPlus 
            color='blue' 
            size={20} 
            onClick={openModal} />
        </IconTitle>
      </TitleList>
      { isLoadingInformation ?
        workers.map((worker,i) => {
          return (
            <ItemWorker key={i}>
              <ContentImage>
                <Image src={worker.profileImage}/>
              </ContentImage> 
              <DescriptionWorker>
                <Text NAME> {worker.fullname} </Text>
                <Text> {worker.specialty} </Text>
              </DescriptionWorker>
              {
                !isWorkerSelected ?
                <Puntuacion>
                  {/* Configurar en base a la puntuacion */}
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                </Puntuacion> 
                : <></>
              }

              <Next> 
                <FaAngleRight color='gray' size={18} 
                  onClick={ () => { 
                    //Implementar este action para que sea solo 1 
                    dispatch(updateWorkerSelectedData(worker))
                    dispatch(updateWorkerSelected(true)) 
                  } }
                /> 
              </Next>
            </ItemWorker> ) 
        }) : null
      }
      {/*Modales*/}
      {
        modalAddState
        ? <WorkerAddModal isOpen={modalAddState} handleClose = {closeModal} />
        : null
      }
    </Content>
  )
}

export default List;