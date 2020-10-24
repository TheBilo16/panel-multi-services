import styled from 'styled-components';

const widthIconControl = "50px";

const Content = styled.div`
  display:flex;
  position:relative;
`
const List = styled.select`
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
const IconContent =  styled.div`
  position:absolute;
  width:${widthIconControl};
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const OptionList = styled.option`
  display:flex;

`

export {
  Content,
  List,
  OptionList,
  IconContent
}