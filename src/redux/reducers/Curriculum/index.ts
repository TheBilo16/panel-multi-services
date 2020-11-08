import CurriculumController from './metadata';
import TYPES from '../../actions/CurriculumActions';

const initialState : CurriculumController.ICurriculums = {
  curriculums : [],
  curriculumSelected : false,
  loadingInformation:false,
  curriculumSelectedData:{
    id : 0,
    usuario : '',
    specialty :  '',
    title :  '',
    content :  '',
    fecha_emision :  new Date(),
    state :  'in-wait',
    imageUser : '',
    phone : '',
    email : ''
  }
} 

const reducer = (state=initialState,action) => {
  switch(action.type){
    case TYPES.UPDATE_STATE_CURRICULUM : return({
      ...state,
      curriculums:action.payload
    })
    case TYPES.UPDATE_CURRICULUM_SELECTED_STATE : return({
      ...state,
      curriculumSelected : action.payload
    })
    case TYPES.UPDATE_LOADING_INFORMATION : return({
      ...state,
      loadingInformation : action.payload
    })
    case TYPES.UPDATE_SELECTED_DATA :return({
      ...state ,
      curriculumSelectedData : action.payload
    })
    default : return({
      ...state
    })
  }
}

export default reducer;