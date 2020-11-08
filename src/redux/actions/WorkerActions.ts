import { baseUrl , user_image_default_route } from '../../config';

const TYPES = {
  UPDATE_STATE_WORKER : 'update-state-worker',
  UPDATE_LOADING_INFORMATION : 'update-loading-information',
  UPDATE_WORKER_SELECTED : 'update-worker-selected',
  UPDATE_OPTION_SELECTED_WORKER : 'update-option-selected-worker',
  UPDATE_WORKER_SELECTED_DATA : 'update-wrker-selected',
  UPDATE_WORKS : 'update-works',
  UPDATE_MODAL_ADD_STATE : 'update-modal-state' 
}

//Configs
const configFetch = (method,data) => ({
  method ,
  body : JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
})

const formatWork = (work) => {
  if (work.length > 0 ){
    let workFormat = work.map((e,i)=>{
      return ({
        description : e.description,
        state : e.state,
        price : e.price,
        fullname : e.user.fullname,
        descriptionUser : e.user.description
      })
    })
    return workFormat;
  } else return [];
}
    
const formatWorkers = workers => {
  let workersSend : [object] = workers.map( (e,i) => {
    return ({
      id : e.id,
      availability: e.availability,
      basePrice : e.basePrice,
      specialty : e.specialty.name,
      fullname: e.user.fullname,
      profileImage : e.user.profileImage || user_image_default_route,
      description : e.user.description,
      works : formatWork(e.workdetails)
    })
  })
  return workersSend;
}

// ACTIONS
export const updateStateWorker = payload => ({
  type:TYPES.UPDATE_STATE_WORKER,
  payload
})

export const updateWorkerSelected = (payload:boolean) => ({
  type:TYPES.UPDATE_WORKER_SELECTED,
  payload
})

export const updateOptionSelectedWorker = payload => ({
  type:TYPES.UPDATE_OPTION_SELECTED_WORKER,
  payload
})

export const updateLoadingInformation = (payload:boolean) => ({
  type:TYPES.UPDATE_LOADING_INFORMATION,
  payload
})

export const updateWorkerSelectedData = payload => ({
  type : TYPES.UPDATE_WORKER_SELECTED_DATA,
  payload
})  

export const updateWorks = payload => ({
  type : TYPES.UPDATE_WORKS,
  payload
})

export const updateModalAddState = (payload:boolean) => ({
  type : TYPES.UPDATE_MODAL_ADD_STATE,
  payload
})

// ACTIONS THUNKS
export const loadingWorkers = () => async dispatch => {
  try {
    const workers = await (await fetch(`${baseUrl}/worker`)).json(); 
    const workersSend = formatWorkers(workers);
    dispatch(updateStateWorker(workersSend));
    dispatch(updateLoadingInformation(true));
  } catch (e) { console.log(e.message) }
}

export const findWorkBySpecialty = (specialty:string) => async (dispatch) => {

  if (!specialty){ 
    dispatch(loadingWorkers());
    return; 
  }

  try {
    const config = configFetch('POST',{specialty} );
    let workers = await (await fetch(`${baseUrl}/worker/filterBySpecialty`,config)).json();
    if (workers.length==0) dispatch(updateWorkerSelected(false));
    let workersSend = formatWorkers(workers);
    dispatch(updateStateWorker(workersSend));
    dispatch(updateLoadingInformation(true));

  }catch(e){
    console.log(e.message);
  }
}

export const deleteWorker = (id) => async (dispatch) => {
  try {
    let config = configFetch('post',{id});
    fetch(`${baseUrl}/worker/delete`,config);
    alert('Trabajador removido');
    dispatch(updateWorkerSelected(false))
    dispatch(loadingWorkers())
  }catch(e){
    console.log(e.message);
  }
}

export const createWorker = (worker:FormData) => async(dispatch) => {
  try{
    await (await fetch(`${baseUrl}/worker/add`,{
      method:'post',
      body:worker
    })).json();
    dispatch(loadingWorkers());
  }catch(e){
    console.log(e.message);
  }
}

export default TYPES;