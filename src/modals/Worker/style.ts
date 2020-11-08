import styled from 'styled-components';

const widthIconControl = "50px";

const ModalStyles = {
  content : styled.form`
    display:flex;
    flex-flow:column nowrap;
    width:400px;
    background:white;
    border-radius:15px;
  `,
  header : styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
    padding:20px 30px ;
    background:rgba(244,244,244,1);
  `,
  title : styled.p`
    font-size:15px;
    font-weight:800;
    color:rgb(111,111,111);
  `,
  body : styled.div`
    padding:30px;
  `,
  footer : styled.div`
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
  `,
  button : styled.input`
    padding:10px;
    color:#FFFFFF;
    font-weight:700;
    font-size:14px;
    background:rgb(24,88,212);
    border-radius:10px;
  ` 
}

export default ModalStyles;