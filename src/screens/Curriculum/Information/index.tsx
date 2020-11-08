import React from 'react';

//DESIGN
import CurriculumStyles from './style';
import { FaTrash , FaCheckCircle } from 'react-icons/fa';

//HOOKS 
import useCurriculumHook from '../../../Hooks/Curriculum/curriculumHook';

const CurriculumInformation = () => {

  const {
    selectedCurriculum,
    removeCurriculum,
    editCurriculum
  } = useCurriculumHook();

  return (
    <CurriculumStyles.content>
      <CurriculumStyles.title> {selectedCurriculum.title} </CurriculumStyles.title>
      <CurriculumStyles.description> {selectedCurriculum.content} </CurriculumStyles.description>

      <CurriculumStyles.extraInformation> Especilidad : {selectedCurriculum.specialty} </CurriculumStyles.extraInformation>
      <CurriculumStyles.extraInformation> Estado : {selectedCurriculum.state} </CurriculumStyles.extraInformation>
      <CurriculumStyles.extraInformation> Fecha de emision : {selectedCurriculum.fecha_emision} </CurriculumStyles.extraInformation>
      <CurriculumStyles.extraInformation> Telefono : {selectedCurriculum.phone} </CurriculumStyles.extraInformation>
      <CurriculumStyles.extraInformation> Email : {selectedCurriculum.email} </CurriculumStyles.extraInformation>
      
      <CurriculumStyles.optionsContent>
       
        <CurriculumStyles.option 
          background='#e53935'
          onClick={ () => { removeCurriculum(selectedCurriculum.id) }}  
        >
          <CurriculumStyles.icon>
            <FaTrash size={15} color='white' />
          </CurriculumStyles.icon>
          <CurriculumStyles.text> Descartar curriculum </CurriculumStyles.text>
        </CurriculumStyles.option>
              
        <CurriculumStyles.option 
          background='#00897b'
          onClick={ () => { 
            if (selectedCurriculum.state != 'ok' ) editCurriculum(selectedCurriculum.id,'ok') 
            else alert('registro ya aceptado');
          }}  
        >
          <CurriculumStyles.icon>
            <FaCheckCircle size={15} color='white' />
          </CurriculumStyles.icon>
          <CurriculumStyles.text> Aceptar curriculum </CurriculumStyles.text>
        </CurriculumStyles.option>
      </CurriculumStyles.optionsContent>      
    </CurriculumStyles.content>
  )
}

export default CurriculumInformation;