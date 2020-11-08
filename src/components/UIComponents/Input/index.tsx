import React , { FC , useRef } from 'react';
import { IconType } from 'react-icons/lib';
import InputStyles from './style';

interface IInput {
  placeholder : string,
  type : string,
  Icon : IconType,
  onChange?(value?:any):void,
  refs?:any,
  value?:string,
  name?:string,
  defaultValue?:string
}

const Input : FC<IInput> = ({placeholder,type,Icon,onChange,refs,value,name,defaultValue}) => {
  return (
    <InputStyles.content>
      <InputStyles.icon>
        <Icon size={20} color='gray'/>
      </InputStyles.icon>
      <InputStyles.input 
        placeholder={placeholder}
        type = {type}
        onChange={onChange}
        ref={refs}
        defaultValue = {defaultValue}
        value={value}
        required
        name = {name}
      />
    </InputStyles.content>
  )
}

export default Input;