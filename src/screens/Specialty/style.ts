import styled from 'styled-components';

const minWidthCeld:string = "100px";
const maxWidthCeld:string = "150px";

interface IRow {
  margin?:string,
  borderRadius?:string,
  weight?:number,
  sizeText?:string
}

interface IFloatButton {
  background?:string,
}


const SpecialtyStyles = {
  container : styled.div`
    display:flex;
    flex-flow:column nowrap;
    padding:20px;
  `,
  title : styled.p`
    display:flex;
    margin:15px 10px;
    min-width: max-content;
    font-size:25px;
    font-weight:700;
  `,
  //Exportar a componentes globales.
  floatButton : styled.button<IFloatButton>`
    display:flex;
    padding:15px;
    background:${ ({ background }) => background || "teal" };
    position:fixed;
    left:100%;
    top:100%;
    transform:translate(-100%,-100%);
    margin:-20px;
    border-radius:50%;
    box-shadow:2px 2px 10px rgba(0,0,0,.2);
  `,
  //----------------------------------
  items : styled.div`
    display:flex;
    flex-flow:row wrap;
  `,
  item : styled.div`
    width:200px;
    height:250px;
    display:flex;
    flex-flow:column nowrap;
    margin:10px;
    background:rgb(230,230,230);
  ` ,
  image : styled.img`
    width:100%;
    height:50%;
  `,
  titleItem : styled.p`
    width:100%;
    height:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    font-size:20px;
  `,
  optionsItem : styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    align-items:center;
    background-color:transparent;
  `,
  option : styled.div<IFloatButton>`
    width:45px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    background : teal;
    border-radius:50%;
    background:${({background})=>background || 'teal'};
  `,



  
  Table : {
    row : styled.div<IRow>`
      width: fit-content;
      height:50px;
      display:flex;
      flex-flow:row nowrap;
      background: #FFF;
      margin : ${ ({margin}) => margin || 0 };
      border-radius : ${ ({borderRadius}) => borderRadius || '' };
      font-weight: ${ ({weight}) => weight || 100 };
      font-size: ${({sizeText}) => sizeText || "15px" };
    `,

    celd : styled.div`
      min-width: ${minWidthCeld};
      max-width: ${maxWidthCeld};
      width: ${maxWidthCeld};
      height: 100%;
      padding:0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    ` ,
    image : styled.img`
    width: 70%;
    height: 70%;
    border-radius:50%;
  `,
  } 
}

export default SpecialtyStyles;