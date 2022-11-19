import React from 'react'

const Column = ({ children }) => {
  return <div className='h-screen overflow-y-scroll p-4'>{children}</div>
}

export default Column