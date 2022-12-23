import React from 'react'

const Column = ({ className = '', children }) => {
  return <div className={`sm:h-[89.5vh] overflow-y-scroll p-4 ${className}`}>{children}</div>
}

export default Column