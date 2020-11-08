import { configure } from '@testing-library/react';
import { baseUrl } from '../../config';

const TYPES = {
  UPDATE_STATE_SPECIALTY : 'update-state-specialty',
  UPDATE_LOADING_INFORMATION : 'update-loading-information',
  UPDATE_SPECIALTY_SELECTED_DATA : 'update-specialty-selected-data'
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

export const update_loading_information_state = (payload:boolean) => ({
  type:TYPES.UPDATE_LOADING_INFORMATION,
  payload
})

export const update_selected_data = payload => ({
  type : TYPES.UPDATE_SPECIALTY_SELECTED_DATA,
  payload
})

//ACTIONS THUNKS
export const createSpecialty = (specialty:FormData) => async(dispatch) => {
  try {
    fetch(`${baseUrl}/specialty/create`,{
      method : 'post',
      body : specialty
    });
    alert('Especialidad creada con exito');
    dispatch(update_loading_information_state(false));
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message);
  }

} 

export const deleteSpecialty = (specialty:FormData) => async(dispatch) => {
  
  try {  
    fetch(`${baseUrl}/specialty/delete`,{
      method:'post',
      body:specialty
    });
    alert('registro elimnado satisfactoriamente')
    dispatch(update_loading_information_state(false));
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message)
  }
}

export const updateSpecialty = (specialty:FormData) => async(dispatch) => {
  try {
    fetch(`${baseUrl}/specialty/update`,{
      method:'post',
      body:specialty
    });
    alert('registro actualizado satifactoriamente')
    dispatch(update_loading_information_state(false));
    dispatch(loadingInformationSpecialty());

  }catch(e){ console.log(e.message) }
}

export const loadingInformationSpecialty = () => async(dispatch) => {
  try {
    const { specialty } = await (await fetch(`${baseUrl}/specialty`)).json();
    dispatch(update_loading_information_state(true));
    dispatch(updateStateSpecialty(specialty));
  }catch(e){
    console.log(e.message);
  }
}
export default TYPES;