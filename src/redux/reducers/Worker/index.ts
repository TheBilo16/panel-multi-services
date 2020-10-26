import WorkerController from './metadata';
import TYPES from '../../actions/WorkerActions';

const initialState : WorkerController.IWorkers = {
  workers : [],
  isLoadingInformation : false,
  isWorkerSelected : false,
  optionSelectedWorker : 'Description',
  workerSelectedData : {
    id : 0,
    availability : '',
    basePrice : 0,
    specialty : '',
    fullname:'',
    profileImage : '',
    description:'',
    works:[]
  }
}

const reducer = ( state = initialState , action ) => {
  switch(action.type){
    case TYPES.UPDATE_STATE_WORKER : //Implementar el actualizado de informacion 
      return ({
        ...state, 
        workers : action.payload
      })
    case TYPES.UPDATE_LOADING_INFORMATION :  //Verificar si la informacion ya cargo
      return ({
        ...state,
        isLoadingInformation : action.payload
      }) 
    case TYPES.UPDATE_WORKER_SELECTED : //SI HAY UN TRABAJOR SELECCIONADO O NO 
      return ({
        ...state,
        isWorkerSelected : action.payload
      })
    case TYPES.UPDATE_OPTION_SELECTED_WORKER : //OPCION A MOSTRAR DEL TRABAJADOR SELECCIONADO
      return ({
        ...state,
        optionSelectedWorker : action.payload
      })
    case TYPES.UPDATE_WORKER_SELECTED_DATA :  //ID DEL TRABAJOS SELECCIONADO
      return ({
        ...state,
        workerSelectedData : action.payload
      })
    default : 
      return state;
  }
}

export default reducer;