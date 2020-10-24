import React , {FC, JSXElementConstructor} from 'react';
import { IconType } from 'react-icons'
import {
  Content,
  List,
  OptionList,
  IconContent
} from './style';

interface IOptionSelect {
  value : string,
  text :string
}

interface ISelect {
  options:Array<IOptionSelect>,
  onClick(e:any):void
  Icon:IconType
}

const Select : FC<ISelect>  = ({options,onClick,Icon}) => {
  return (
    <Content>
      <IconContent> <Icon size = {20} color="gray" /> </IconContent>
      <List onClick={onClick}>
        {
          options.map((e,i)=>{
            return (
              <OptionList value={e.value} key={i}>
                {e.text}
              </OptionList>
            )
          })
        } 
      </List>
    </Content>
  )
}

export default Select;
