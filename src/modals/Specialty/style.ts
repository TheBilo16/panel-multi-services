import styled from 'styled-components';

const ModalStyles = {
  content : styled.div`
    width:300px;
    min-width:300px;
    display:flex;
    padding:20px;
    flex-flow:column nowrap;
    border-radius:20px;
    background:white;
  `,
  title : styled.p`
    display:flex;
    justify-content:center;
    margin:20px 0;
    font-size:20px;
    font-weight:700;
  `

}

export default ModalStyles;