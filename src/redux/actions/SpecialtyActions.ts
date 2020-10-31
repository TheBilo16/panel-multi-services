import { baseUrl } from '../../config';

const TYPES = {
  UPDATE_STATE_SPECIALTY : 'update-state-specialty',
  UPDATE_LOADING_INFORMATION : 'update-loading-information',
}

//CONFIGURACIONES
const configFetch = (method:string,body:object) => ({
  method,
  body : JSON.stringify(body),
  headers : {
    'Content-Type': 'application/json'
  }
  // .....
})

//ACTIONS

export const updateStateSpecialty = (payload) => ({
  type:TYPES.UPDATE_STATE_SPECIALTY,
  payload
})



//ACTIONS THUNKS
export const createSpecialty = (specialty:object) => async(dispatch) => {
  try {
    let config = configFetch('post',specialty);
    fetch(`${baseUrl}/specialty/create`,config);
    console.log("Especialidad creada");
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message);
  }

} 

export const deleteSpecialty = (id:number) => async(dispatch) => {
  
  try {  
    let config = configFetch('post',{id});
    fetch(`${baseUrl}/specialty/delete`,config);
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message)
  }
}

export const updateSpecialty = (specialty) => async(dispatch) => {
  try {
    let config = configFetch('post',specialty);
    fetch(`${baseUrl}/specialty/update`,config);
    dispatch(loadingInformationSpecialty());

  }catch(e){ console.log(e.message) }
}

export const loadingInformationSpecialty = () => async(dispatch) => {
  try {
    const { specialty } = await (await fetch(`${baseUrl}/specialty`)).json();
    dispatch(updateStateSpecialty(specialty));
  }catch(e){
    console.log(e.message);
  }
}


export default TYPES;