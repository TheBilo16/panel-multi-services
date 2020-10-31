import styled , {css} from 'styled-components';

interface messageAlert {
  fondo?:any
}

interface IModalContent {
  height?:string, 
  width?:string,
}

interface IButton {
  background?:string,
  color?:string
}

const ModalStyles = {
  content : styled.div<IModalContent>`
    width:${({width})=> width||"350px"};
    min-width:${({width})=>width||"350px"};
    height:${({height})=>height||"max-content"};
    display:flex;
    padding:25px;
    flex-flow:column nowrap;
    border-radius:20px;
    background:white;
    overflow:auto;
  `,
  title : styled.p`
    display:flex;
    justify-content:center;
    margin:20px 0;
    font-size:20px;
    font-weight:700;
  `,
  button : styled.button<IButton>`
    align-self: end;
    display: flex;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    color: #FFFFFF;
    background: ${({background})=>background||"#b71c1c"};
    color: ${({color})=>color||'#FFFFFF'};
    justify-content: center;
  `,
  image : styled.img`
    width:100%;
    height:auto;
    margin:10px 0;
  `,
  messageAlert : styled.div<messageAlert>`
    display:flex;
    color:white;
    width:100%;
    padding:10px;
    align-items:center;
    font-size:13px;
    font-weight:600;
    margin:5px 0;
    background : ${ ({fondo}) => fondo || 'green'}
  `


}

export default ModalStyles;