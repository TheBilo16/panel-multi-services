import React , { FC , useRef } from 'react';
import { IconType } from 'react-icons/lib';
import InputStyles from './style';

interface IInput {
  placeholder : string,
  type : string,
  Icon : IconType,
  onChange(value?:any):void,
  refs?:any,
  value?:string
}

const Input : FC<IInput> = ({placeholder,type,Icon,onChange,refs,value}) => {
  return (
    <InputStyles.content>
      <InputStyles.icon>
        <Icon size={13}/>
      </InputStyles.icon>
      <InputStyles.input 
        placeholder={placeholder}
        type = {type}
        onChange={onChange}
        ref={refs}
        value={value}
      />
    </InputStyles.content>
  )
}

export default Input;