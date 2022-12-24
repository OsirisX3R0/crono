import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement(document.getElementById('root'));

const Modal = ({children, ...modalProps}) => {
  return (
    <ReactModal {...modalProps}>
    {children}
    </ReactModal>
  )
}

export default Modal