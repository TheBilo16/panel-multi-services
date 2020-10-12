import { baseUrl } from '../../config';

const TYPES = {
  UPDATE_STATE_WORKER : 'update-state-worker',
  UPDATE_LOADING_INFORMATION : 'update-loading-information',
  UPDATE_WORKER_SELECTED : 'update-worker-selected',
  UPDATE_OPTION_SELECTED_WORKER : 'update-option-selected-worker',
  UPDATE_WORKER_SELECTED_DATA : 'update-wrker-selected',
  UPDATE_WORKS : 'update-works'
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
        username : e.user.name,
        userlastname : e.user.lastname,
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
      location:e.location,
      basePrice : e.basePrice,
      specialty : e.specialty.name,
      name : e.user.name,
      lastname : e.user.lastName,
      profileImage : e.user.profileImage,
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

// ACTIONS THUNKS
export const loadingWorkers = () => async dispatch => {
  try {
    const workers = await (await fetch(`${baseUrl}/worker`)).json();
    const workersSend = formatWorkers(workers);
    dispatch(updateStateWorker(workersSend));
    dispatch(updateLoadingInformation(true));
  } catch (e) { console.log(e.message) }
}


export default TYPES;