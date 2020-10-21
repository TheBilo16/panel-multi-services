import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  width:100%;
  flex-flow:column nowrap;
` 

const Title = styled.p`
  display:flex;
  width:100%;
  font-size:20px;
  height : 60px;
  justify-content : center;
  align-items:center;
`
const ContainerWorks = styled.div`
  display:flex;
  width:100%;
  flex-flow : row nowrap;
  justify-content:space-around;
`

const WorkDetail = styled.div`
  display:flex;
  flex-flow:column nowrap;
  background:white;
  border-radius:20px;
  width:47%;
  background:#FAFAFA;
`

//Items works
const TitleWork = styled.p`
  display:flex;
  font-size:17px;
  font-weight:700;
  justify-content:center;
  align-items:center;
  padding : 15px 15px 5px 15px;
  margin:5px 0;
`

const UserWork = styled.p`
  display:flex;
  padding : 5px 15px;
  font-size:14px;
  color:585858;
  font-weight:500;
  
`
const DescriptionWork = styled.p`
  display:flex;
  padding : 5px 15px;
  margin:5px 0;
  color:#8B8B8B;
  font-size:14px;
`

const FechaEmision = styled.p`
  display:flex;
  padding : 5px 15px;
  margin:5px 0;
  color:#8B8B8B;
  font-size:13px;
`

const PriceWork = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  background:#F4F4F4;
  border-radius:0 0 20px 20px;
  color:#1858D4;
  padding : 10px 15px;
  font-weight:700;
`

export {
  Container,
  Title,
  ContainerWorks,
  WorkDetail,
  TitleWork,
  UserWork,
  DescriptionWork,
  PriceWork,
  FechaEmision
}