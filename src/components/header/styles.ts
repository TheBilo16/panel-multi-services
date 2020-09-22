import styled from 'styled-components';
import { widthIconSearch , widthFind , border } from './config';

//Content Global
const Content = styled.div`
  display:grid;
  grid-template-columns : 60% 30%;
  grid-template-rows : 50px;
  justify-content:space-between;
  
`

//Input Search
const Search = styled.div`
  width:100%;
  position:relative;
`

const IconSearch = styled.div`
  width : ${widthIconSearch};
  height : ${widthFind};
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
`

const Input = styled.input`
  width:100%;
  height:${widthFind};
  padding-left:${widthIconSearch};
  border-radius:${border};
`

//Date
const ContentDate = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:${widthFind};
  border-radius : ${border};
  color:gray;
  background:white;
`

const Text = styled.p`
  width:70%;
  height:${widthFind};
  display:flex;
  flex-flow:row no-wrap;
  align-items:center;
`

const IconDate = styled.div`
  width:${widthIconSearch};
  height:${widthFind};
  display:flex;
  justify-content:center;
  align-items:center;
`

export {
  Content,
  Search,
  IconSearch,
  Input,
  ContentDate,
  Text,
  IconDate
}
