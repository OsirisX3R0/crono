import React, { useState } from 'react'

const Field = ({label, className, ...fieldProps}) => {
  const [name] = useState(label.toLowerCase())
  return (
    <div className={className}>
      <div><label htmlFor={name} className="text-sm">{label}</label></div>
      <div><input type="text" name={name} id={name} className="form-field" {...fieldProps} /></div>
    </div>
  )
}

export default Field