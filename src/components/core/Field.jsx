import React, { useState } from 'react'

const Field = ({label, className, ...fieldProps}) => {
  const [name] = useState(label.toLowerCase())
  return (
    <div className={className}>
      <div><label htmlFor={name} className="text-sm">{label}</label></div>
      <div><input type="text" name={name} id={name} className="bg-zinc-700 text-slate-200 p-2 rounded-md" {...fieldProps} /></div>
    </div>
  )
}

export default Field