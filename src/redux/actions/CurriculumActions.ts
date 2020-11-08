import { baseUrl , user_image_default_route } from '../../config';
import { loadingInformationSpecialty } from './SpecialtyActions';

const TYPES = {
  UPDATE_STATE_CURRICULUM : 'update-state-curriculum',
  UPDATE_CURRICULUM_SELECTED_STATE : 'update-curriculum-selected-state',
  UPDATE_LOADING_INFORMATION : 'loading-information',
  UPDATE_SELECTED_DATA : 'update-selected-data'
}


type method = 'post'|'update'|'delete';
//CONFIGURACIONES
const configFetch = ( method : method , body : object ) => ({
  method,
  body : JSON.stringify(body),
  headers : {
    'Content-Type': 'application/json'
  }
})

const formatCurriculum = curriculum => {
  return (
    curriculum.map((e)=>{
      return ({
        id : e.id,
        usuario : e.user.fullname,
        specialty : e.specialty.name,
        title : e.title,
        content : e.content,
        fecha_emision : e.createdAt,
        state : e.state,
        imageUser : e.user.profileImage || user_image_default_route,
        phone : e.phone,
        email : e.email
      })
    })
  )
}



//ACTIONS 
export const update_state_curriculum = payload => ({
  type:TYPES.UPDATE_STATE_CURRICULUM,
  payload
})

export const update_curriculum_selected_state = (payload:boolean) => ({
  type:TYPES.UPDATE_CURRICULUM_SELECTED_STATE,
  payload
})

export const loadingInformation = (payload:boolean) => ({
  type:TYPES.UPDATE_LOADING_INFORMATION,
  payload
})

export const update_selected_data = payload => ({
  type : TYPES.UPDATE_SELECTED_DATA,
  payload
})

//ACTION THUNKS
export const loadingInformationCurriculum = () => async(dispatch) => {
  try{
    const curriculum = await (await (fetch(`${baseUrl}/curriculum`))).json();
    let curriculumSend = formatCurriculum(curriculum);
    dispatch(loadingInformation(true));
    dispatch(update_state_curriculum(curriculumSend));
  }catch(e){
    console.log(e.message);
  }
}

export const findCurriculumBySpecialty = (specialty:string) => async(dispatch) => {
  
  if(!specialty) {
    dispatch(loadingInformationCurriculum());
    return;
  }
  
  try{
    let config = configFetch('post',{specialty});
    const curriculum = fetch(`${baseUrl}/curriculum/filter`,config);
    let curriculumSend = formatCurriculum(curriculum);
    dispatch(update_state_curriculum(curriculumSend));
    dispatch(loadingInformation(true));
  }catch(e){
    console.log(e.message);
  }
}

export const deleteCurriculum = (id:number) => async(dispatch) => {
  
  try{
    let config = configFetch('post',{id});  
    fetch(`${baseUrl}/curriculum/delete`,config);
    alert('registro eliminado');
    dispatch(update_curriculum_selected_state(false));
    dispatch(loadingInformation(false));
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message);
  }
}

export const updateCurriculum = (id : number , state:string) => async(dispatch) => {
  try{
    let config = configFetch('post',{id,state}); 
    fetch(`${baseUrl}/curriculum/updateState`,config);
    alert('registro actualizado');
    dispatch(loadingInformation(false));
    dispatch(loadingInformationSpecialty());
  }catch(e){
    console.log(e.message);
  }
}

export default TYPES;