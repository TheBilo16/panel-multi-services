import React ,{ FC } from 'react';
import ReactModal from 'react-modal';
import { createPortal } from "react-dom";

const nodeModal = document.getElementById("modal");

export interface IModal {
  isOpen: Boolean,
  handleClose():void
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

ReactModal.setAppElement("#root");

const Modal : FC<IModal> = ({isOpen,handleClose,children}) => {  
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