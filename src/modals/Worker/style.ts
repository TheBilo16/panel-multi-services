import styled from 'styled-components';

const widthIconControl = "50px";

const HeaderModal = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  padding:20px 30px ;
  background:rgba(244,244,244,1);
`

const Title = styled.p`
  font-size:15px;
  font-weight:800;
  color:rgb(111,111,111);
`

const BodyModal = styled.div`
  padding:30px;
`

const FooterModal = styled.div`
  padding:10px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const GroupControl = styled.div`
  display:flex;
  position:relative;
`

const Controls = styled.div`
  display:flex;
  width:100%;
  margin:6px 0;
  height:35px;
  background:rgb(246,246,246);
  padding:0 10px 0 ${widthIconControl};
  border-radius:10px;
  color:rgb(139,139,139);
  border:none;
`

const Icon =  styled.div`
  position:absolute;
  width:${widthIconControl};
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Button = styled.button`
  padding:10px;
  color:#FFFFFF;
  font-weight:700;
  font-size:14px;
  background:rgb(24,88,212);
  border-radius:10px;
`


export {
  HeaderModal,
  Title,
  FooterModal,
  Button,
  BodyModal,
  Controls,
  GroupControl,
  Icon
}