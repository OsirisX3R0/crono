import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement(document.getElementById('root'));
const modalStyles = {
  content: {
    maxWidth: '240px',
    maxHeight: '240px',
    backgroundColor: '#262626',
    color: '#f8fafc',
    margin: '75px auto 0'
  }
}
const Modal = ({children, ...modalProps}) => {
  return (
    <ReactModal {...modalProps}>
    {children}
    </ReactModal>
  )
}

export default Modal