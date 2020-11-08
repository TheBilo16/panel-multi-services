import React , { FC } from 'react';
import InputStyle from './style';

interface IInput {
  text:string,
  name:string,
  onChange?(e?:any):void
}

const InputFile:FC<IInput> = ({ name , text , onChange }) => {

  
  return (
    <InputStyle.content>
      {text}
      <InputStyle.file type='file' name={name} onChange={onChange} />
    </InputStyle.content>
  )
}

export default InputFile;