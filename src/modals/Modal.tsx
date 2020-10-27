import React ,{Children, FC} from 'react';
import ReactModal from 'react-modal';
import { createPortal } from "react-dom";
import {nodeModal} from './configPortal';

export interface IModal {
  isOpen: Boolean,
  handleClose():void
}


const overlayStyle = {
  backgroundColor:"rgba(0,0,0,.7)"
}
const contentStyle = {
  display:"flex",
  margin:'0 auto',
  padding:0,
  background:"transparent",
  border:"none"
}


//ReactModal.setAppElement('#root');

const Modal : FC<IModal> = ({isOpen,handleClose}) => {
  
  return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style ={{ overlay : overlayStyle , content:contentStyle }}
      >
        {Children}
      </ReactModal>
    ) 
}


export default Modal;