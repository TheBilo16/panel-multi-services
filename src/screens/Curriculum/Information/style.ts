import styled from 'styled-components';

interface IOptionCurriculum {
  background : string
}

const CurriculumStyles = {
  content : styled.div`
    display:flex;
    flex-flow:column nowrap;
    background:white;
    border-radius:20px;
    padding:20px;
    margin:0 20px;
    width:500px;
    min-width:500px;
  `,
  title : styled.p`
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;
    font-size:20px;
  `,
  description : styled.div`
    display:flex;
    padding:10px;
    margin:0 10px;
    font-size:15px;
    color:gray;
    height:150px;
  `,
  optionsContent : styled.div`
    display:flex;
    width:100%;
    height:40px;
    flex-flow:row nowrap;
    justify-content:space-between;
    margin : 10px 0;
  `,
  option : styled.button<IOptionCurriculum>`
    display:flex;
    width:45%;
    height:100%;
    align-items:center;
    align-self:center;
    background:${({background})=>background};
    color:white;
  `,
  text : styled.span`
    font-size:15px;
    font-weight:500;
  `,
  icon : styled.div`
    width:40px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center; 
  `,
  extraInformation : styled.div`
    display:flex;
    flex-flow:row nowrap;
    width:100%;
    background: #1e88e5;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:13px;
    height:30px;
    margin:3px 0;
    font-weight:700;
  `
}

export default CurriculumStyles;