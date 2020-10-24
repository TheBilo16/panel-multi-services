import { baseUrl } from '../../config';

const TYPES = {
  UPDATE_STATE_SPECIALTY : 'update-state-specialty',
  UPDATE_LOADING_INFORMATION : 'update-loading-information'
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
export const loadingInformationSpecialty = () => async(dispatch) => {
  try {
    const specialtys = await (await fetch(`${baseUrl}/specialty`)).json();
    dispatch(updateStateSpecialty(specialtys.specialty));
  }catch(e){
    console.log(e.message);
  }
}


export default TYPES;