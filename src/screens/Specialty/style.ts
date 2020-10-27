import styled from 'styled-components';

const minWidthCeld:string = "100px";
const maxWidthCeld:string = "150px";

interface IRow {
  margin?:string,
  borderRadius?:string,
  weight?:number,
  sizeText?:string
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