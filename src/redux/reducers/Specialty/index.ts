import ControllerSpecialty from './metadata';
import TYPES from '../../actions/SpecialtyActions';

const initialState : ControllerSpecialty.ISpecialtys = {
  specialtys:[],
  loadingInformation:false
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case TYPES.UPDATE_STATE_SPECIALTY : return({
      ...state,
      specialtys : action.payload      
    })
    default : return({
      ...state
    })
  }
}

export default reducer;