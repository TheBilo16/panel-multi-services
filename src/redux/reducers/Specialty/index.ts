import ControllerSpecialty from './metadata';
import TYPES from '../../actions/SpecialtyActions';

const initialState : ControllerSpecialty.ISpecialtys = {
  specialtys:[],
  loadingInformation:false,
  specialtySelectedData : {
    id : 0 ,
    name : '',
    image : ''
  }
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case TYPES.UPDATE_STATE_SPECIALTY : return({
      ...state,
      specialtys : action.payload      
    })
    case TYPES.UPDATE_LOADING_INFORMATION : return({
      ...state,
      loadingInformation : action.payload
    }) 
    case TYPES.UPDATE_SPECIALTY_SELECTED_DATA : return({
      ...state,
      specialtySelectedData : action.payload
    })
    default : return({
      ...state
    })
  }
}

export default reducer;