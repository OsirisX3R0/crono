import React from 'react'

const Column = ({ left, children }) => { 
  let className = `grow overflow-auto p-4${left ? ' border-r-2 border-stone-700' : ''}`
  return <div className={className}>{children}</div>
}

export default Column