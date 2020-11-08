import { useState , useEffect } from 'react';


//REDUX
import { useDispatch , useSelector } from 'react-redux';
import { 
  loadingInformationCurriculum, 
  update_curriculum_selected_state, 
  update_selected_data, 
  deleteCurriculum, 
  updateCurriculum 
} from '../../redux/actions/CurriculumActions';


const useCurriculumHook = () => {

  const dispatch = useDispatch();
  const { curriculumSelected , curriculums , loadingInformation , curriculumSelectedData } = useSelector(({curriculum})=>curriculum);

  const selectedCurriculum = curriculumSelectedData;
  const curriculumsData = curriculums.slice();
  const isCurriculumSelected : boolean = curriculumSelected

  useEffect(()=>{
    if(!loadingInformation) dispatch(loadingInformationCurriculum());
  })

  const changeStateSelectedData  = (value:boolean) => dispatch(update_curriculum_selected_state(value));
  const changeSelectedData = (value) => dispatch(update_selected_data(value)); 
  const removeCurriculum = (id) => dispatch(deleteCurriculum(id));
  const editCurriculum = (id,state) => dispatch(updateCurriculum(id,state));

  const value = {
    loadingInformation,
    selectedCurriculum,
    curriculumsData,
    isCurriculumSelected,
    changeStateSelectedData,
    changeSelectedData,
    removeCurriculum,
    editCurriculum
  }

  return value;
}

export default useCurriculumHook;