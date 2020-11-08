import styled from 'styled-components';

const CurriculumStyles = {
  content : styled.div`
    display:flex;
    padding:20px;
    flex-flow:column nowrap;
  `,
  title : styled.p`
    padding:20px 10px;
    width:max-content;
    min-width:'max-content';
    font-size:20px;
    font-weight:700;
  `,
  curriculum : {
    content : styled.div`
      display:flex;
      flex-flow:row nowrap;
    `,
  }
}


export default CurriculumStyles;