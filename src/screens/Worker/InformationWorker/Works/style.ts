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
  flex-flow : row wrap;

`

const WorkDetail = styled.div`
  display:grid;
  max-height:600px;
  background:white;
  border-radius:20px;
  width:47%;
  background:#FAFAFA;
  padding:15px 15px 0 15px;
`

//Items works
const TitleWork = styled.p`
  display:flex;
  padding:7px;
  font-size:15px;
  font-weight:700;
  justify-content:center;
  align-items:center;
`
const UserWork = styled.p`
  display:flex;
  height: 20px;

`
const DescriptionWork = styled.p`
  display:flex;
`

const FechaEmision = styled.p`
  display:flex;
`

const PriceWork = styled.div`
  display:flex;
  justify-content:center;
  background:green;
  border-radius:0 0 20px 20px;
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