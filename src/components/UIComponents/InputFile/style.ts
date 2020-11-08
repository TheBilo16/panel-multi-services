import styled from 'styled-components';

const InputStyle = {
  content : styled.div`
    display:flex;
    position:relative;
    height:35px;
    width:100%;
    margin:6px 0;
    background:#e53935;
    color:#FFFFFF;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:600;
    border-radius:6px;
  `,
  file : styled.input`
    height:100%;
    width:100%;
    position:absolute;
    opacity:0;
  `,

}

export default InputStyle;