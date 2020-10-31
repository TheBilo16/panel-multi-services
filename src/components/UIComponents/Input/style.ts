import styled from 'styled-components';
const widthIconControl = "50px";

const InputStyles = {
  content : styled.div`
    display:flex;
    position:relative;
    height:35px;
    width:100%;
    margin:6px 0;
  `,
  input : styled.input`
    display:flex;
    width:100%;
    height:100%;
    background:rgb(246,246,246);
    padding:0 10px 0 ${widthIconControl};
    border-radius:10px;
    color:rgb(139,139,139);
    border:none; 
  `,
  icon : styled.div`
    position:absolute;
    width:${widthIconControl};
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  `

}

export default InputStyles;