import React , {FC} from "react";
import HeaderStyles from "./styles";
import { FaSearch , FaCalendar } from "react-icons/fa";
import moment from "moment";

interface IHeader {
  onChange?(e?:any):void,
  placeholder?:string
}

const Header:FC<IHeader> = ({ onChange , placeholder }) => {
  return (
    <HeaderStyles.content>
      <HeaderStyles.search>
        <HeaderStyles.iconSearch>
          <FaSearch color = 'gray' size={17} />
        </HeaderStyles.iconSearch>
        <HeaderStyles.input placeholder={placeholder||'Buscar por nombre'} onChange={onChange}  />  
      </HeaderStyles.search>
      <HeaderStyles.date>
        <HeaderStyles.iconDate>
          <FaCalendar color = 'gray' size={17} />
        </HeaderStyles.iconDate>
        <HeaderStyles.text> {moment().format('LL')} </HeaderStyles.text>
      </HeaderStyles.date> 
    </HeaderStyles.content>
  );
}

export default Header;
