import TYPES from '../../actions/UserActions';
import UserController from './metadata';

const initialState : UserController.IUsers = {
  users : [] ,
  isLoadingInformationUser : false
}


const reducer = (state=initialState,action) => {
  switch(action.type){
    case TYPES.UPDATE_STATE_USER : // Falta implementar para mejor rendimiento
      return ({
        ...state,
        users : action.payload, 
      })
    case TYPES.CHANGE_LOADING_INFORMATION : 
      return ({
        ...state,
        isLoadingInformationUser : action.payload
      })
    default : return state

  }
}

export default reducer;