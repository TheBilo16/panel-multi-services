import styled , { css } from 'styled-components';



const Content = styled.div`
  display:flex;
  width: 480px;
  height:auto;
  margin:0;
  flex-flow:column;
`

//Worker
const ItemWorker = styled.div`
  display: flex;
  height:60px;
  background:white;
  margin-bottom : 8px;
  padding: 0 20px;
  border-radius:10px;
`

const ContentImage = styled.div`
  width:60px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Image = styled.img`
  width: 40px;
  height:40px;
  border-radius:50%;
`

const DescriptionWorker = styled.div`
  width: 200px;
  height : 100%;
  padding:10px;
  display:flex;
  flex-flow:column;
`

const Text = styled.p<{ NAME?:any,TITLE?:any } >`
  display:flex;
  font-size:15px;
  color:gray;
  ${
    props =>
    props.NAME && css`
      font-weight:500;
      font-size:17px;
      color:black;
    `
  }
  ${
    props=>
    props.TITLE && css`
      font-size:19px;
      font-weight:800;
      color:black;
    `
  }
`

const Puntuacion = styled.div<{HIDDEN?:any}>`
  display:grid;
  width: 100px;
  grid-template-columns: repeat(5,20px);
  grid-template-rows: 100%;
  ${
    props =>
    props.HIDDEN && css`
      display:none;
    `
  }
`

const Star = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const Next = styled.div`
  width:40px;  
  height:100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
`
//

const TitleList = styled.div`
  height:70px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const IconTitle = styled.div`
  width: 30px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`



export {
  Content,
  ItemWorker,
  ContentImage,
  Image,
  DescriptionWorker,
  Text,
  Puntuacion,
  Star,
  Next,
  TitleList,
  IconTitle
}