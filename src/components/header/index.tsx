import React from "react";
import { 
  Content,
  Search,
  IconSearch,
  Input,
  ContentDate,
  Text,
  IconDate
} from "./styles";
import { FaSearch , FaCalendar } from "react-icons/fa";
import moment from "moment";

const Header = ({ onChange }) => {
  return (
    <Content>
      <Search>
        <IconSearch>
          <FaSearch color = 'gray' size={17} />
        </IconSearch>
      <Input placeholder='Buscar por nombre' onChange={onChange}/>  
    </Search>
      <ContentDate>
        <IconDate>
          <FaCalendar color = 'gray' size={17} />
        </IconDate>
        <Text> {moment().format('LL')} </Text>
      </ContentDate> 
    </Content>
  );
}

export default Header;
