import { useState , useEffect } from 'react';


//REDUX
import { useDispatch , useSelector } from 'react-redux';
import {
  updateOptionSelectedWorker,
  updateWorkerSelected,
  updateWorkerSelectedData,
  updateWorks,
  loadingWorkers,
  findWorkBySpecialty,
  createWorker,
  deleteWorker,
  updateModalAddState,
} from '../../redux/actions/WorkerActions';


const useWorkerHook = () => {
  
  const dispatch = useDispatch();
  const {     
    workers,
    isLoadingInformation,
    isWorkerSelected,
    optionSelectedWorker,
    workerSelectedData ,
    isModalAddOpen
  } = useSelector(({worker})=>worker);

  useEffect(()=>{
    if(!isLoadingInformation) dispatch(loadingWorkers());
  })

  const findWorker = (name:string) => dispatch(findWorkBySpecialty(name));
  const loadingData = () => dispatch(loadingWorkers());
  const updateSelectedData = (data) => dispatch(updateWorkerSelectedData(data));
  const changeWorkerSelectedState = (state:boolean) => dispatch(updateWorkerSelected(state));
  const changeOptionSelectedWorker = (option:string) => dispatch(updateOptionSelectedWorker(option));
  const removeWorker = (id) => dispatch(deleteWorker(id));

  const closeModalAdd = () => dispatch(updateModalAddState(false));
  const openModalAdd = () => dispatch(updateModalAddState(true));


  const addWorker = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    dispatch(createWorker(form));
  }

  const values = {
    workers,
    isLoadingInformation,
    isWorkerSelected,
    optionSelectedWorker,
    workerSelectedData ,
    isModalAddOpen,
    findWorker,
    loadingData,
    updateSelectedData,
    changeWorkerSelectedState,
    changeOptionSelectedWorker,
    removeWorker,
    addWorker,
    closeModalAdd,
    openModalAdd
  }
  return values;
}

export default useWorkerHook;