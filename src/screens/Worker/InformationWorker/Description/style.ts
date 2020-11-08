import styled , { css } from 'styled-components';

interface IText {
  TITLE?:any,
  TEXT?:any,
  margin?:string,
  sizeText?:string
}

const DescriptionStyles = {
  content : styled.div`
    display:flex;
    flex-flow:column;
    width:100%;
  `,
  contentImage :styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items:center;
    margin: 20px 0;
  `,
  image : styled.img`
    width:120px;
    height:120px;
    border-radius:50%;
  `,
  name : styled.p`
    width:100%;
    text-align:center;
    padding : 10px 0;
    font-size : 20px;
    font-weight:800;
  `,
  contentPuntuacion : styled.div`
    display:flex;
    padding:10px 0;
    justify-content:center;
  `,
  puntuacion : styled.div`
    display:grid;
    width: 100px;
    grid-template-columns: repeat(5,20px);
    grid-template-rows: 100%;
    justify-self:center;
  `,
  star : styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
  `,
  information : styled.div`
    width:100%;
    display:flex;
    padding:10px;
    font-size:12px;
    color:gray;
    margin:10px 0;
  `,
  contentExtraInformation : styled.div`
    width:100%;
    display: flex;
    flex-flow:row;
    padding:10px 0;
  `,
  extraInformation : styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:column;
  `,

  text : styled.p<IText>`
    font-size : ${({sizeText})=> sizeText||'17px'};
    margin : ${({margin})=> margin || '0'};
    ${
      ({ TITLE,TEXT }) => 
      TITLE && css`
        font-size:15px;
        font-weight: 700;
        color:black;
      ` ||
      TEXT && css`
        font-size:12px;
        font-weight:300;
        color:gray;
      `
    }
  `,
  buttonDelete : styled.button`
    display:flex;
    width:100%;
    height:40px;
    justify-content:center;
    align-items:center;
    background: #e53935;
    color:white;
    font-size:17px;
    font-weight: 700;
    margin : 10px 0;
  `
}

export default DescriptionStyles;