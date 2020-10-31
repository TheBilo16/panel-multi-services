import React ,{ FC } from 'react';
import ReactModal from 'react-modal';
import { createPortal } from "react-dom";
import { nodeModal } from './configPortal';

export interface IModalBase {
  isOpen: Boolean,
  handleClose():void
}

export interface IModal extends IModalBase {
  extraInformation?:any
}

const overlayStyle = {
  backgroundColor:"rgba(0,0,0,.7)"
}
const contentStyle = {
  display:"flex",
  width:"max-content",
  margin:'0 auto',
  padding:0,
  background:"transparent",
  border:"none"
}




const Modal : FC<IModalBase> = ({isOpen,handleClose,children}) => {
  
  ReactModal.setAppElement("#root");
  
  return (
    createPortal((
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style ={{ overlay : overlayStyle , content:contentStyle }}
      >
        {children}
      </ReactModal>
    ),nodeModal!)) 
}


export default Modal;