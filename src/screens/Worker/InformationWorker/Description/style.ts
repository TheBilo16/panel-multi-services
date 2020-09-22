import styled , { css } from 'styled-components';

const Content = styled.div`
  display:flex;
  flex-flow:column;
  width:100%;
`

const ContentImage =  styled.div`
  display:flex;
  width:100%;
  justify-content: center;
  align-items:center;
  margin: 20px 0;
`
const Image = styled.img`
  width:120px;
  height:120px;
  border-radius:50%;
`
const Name = styled.p`
  width:100%;
  text-align:center;
  padding : 10px 0;
  font-size : 20px;
  font-weight:800;
`

const ContentPuntuacion = styled.div`
  display:flex;
  padding:10px 0;
  justify-content:center;
`

const Puntuacion = styled.div` /* IMPLEMENTAR CON EL COMPONENTE EN 'LIST' */
  display:grid;
  width: 100px;
  grid-template-columns: repeat(5,20px);
  grid-template-rows: 100%;
  justify-self:center;

`

const Star = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const Information = styled.div`
  width:100%;
  display:flex;
  padding:10px;
  font-size:12px;
  color:gray;
  margin:10px 0;
`

const ExtraInformation = styled.div`
  width:100%;
  display: flex;
  flex-flow:row;
  padding:10px 0;
`

const IExtraInformation = styled.div`
  width:50%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column;
  
`
/* ESTAN SEPARADOS POR POSIBLES CAMBIOS EN LOS EFECTOS (esto aplica a la mayoria de componentes)*/
const Horario = styled(IExtraInformation)`
  
`

const PrecioBase = styled(IExtraInformation)`
  
`

const Text = styled.p<{ TITLE?:any,TEXT?:any }>`
  
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
`

export {
  Content,
  ContentImage,
  Image,
  Name,
  ContentPuntuacion,
  Puntuacion,
  Star,
  Information,
  ExtraInformation,
  Horario,
  PrecioBase,
  Text
}