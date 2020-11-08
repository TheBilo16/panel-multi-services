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


//HOOKS
import useWorkerHook from '../../../Hooks/Worker/workerHook';
import useUserHook from '../../../Hooks/User/userHook';

//MODALS
import WorkerAddModal from '../../../modals/Worker/workerAddModal';


const List = () => {

  const { 
    isLoadingInformation,
    workers,
    isWorkerSelected,
    isModalAddOpen,
    updateSelectedData,
    changeWorkerSelectedState,
    closeModalAdd,
    openModalAdd
  } = useWorkerHook();

  const {
    loadingUsers
  } = useUserHook();


  return (
    <Content> 
      <TitleList>
        <Text TITLE> Trabajadores </Text>
        <IconTitle>
          <FaPlus 
            color='blue' 
            size={20} 
            onClick={()=>{
              openModalAdd();
              loadingUsers();
            }} />
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
              
              {/* {
                !isWorkerSelected ?
                <Puntuacion>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                  <Star> <FaStar color='blue' size={15} /> </Star>
                </Puntuacion> 
                : <></> */
              }
              <Next> 
                <FaAngleRight color='gray' size={18} 
                  onClick={ () => { 
                    updateSelectedData(worker);
                    changeWorkerSelectedState(true);
                  }}
                /> 
              </Next>
            </ItemWorker> ) 
        }) : null
      }
      <WorkerAddModal isOpen={isModalAddOpen} handleClose = {closeModalAdd} />
    </Content>
  )
}

export default List;