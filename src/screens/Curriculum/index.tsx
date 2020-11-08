import React from 'react';


//UIComponents 
import CurriculumStyles from './style';

//COMPONENTS 
import Header from '../../components/header';
import List from './List';
import CurriculumInformation from './Information';

//HOOKS
import useCurriculumHook from '../../Hooks/Curriculum/curriculumHook';


const Curriculum = () => {

  const {
    loadingInformation,
    isCurriculumSelected
  } = useCurriculumHook();


  return(
    <CurriculumStyles.content>
      <Header 
        onChange={ (e) => { console.log("Buscando curriculum por nombre") }}
      />
      <CurriculumStyles.title> Lista de correos </CurriculumStyles.title>
      <CurriculumStyles.curriculum.content>
        {
          loadingInformation 
          ? <List />
          : <></>
        }
        {
          isCurriculumSelected 
          ? <CurriculumInformation />
          : <></>
        }
      </CurriculumStyles.curriculum.content>
      
    </CurriculumStyles.content>
  )
}

export default Curriculum;