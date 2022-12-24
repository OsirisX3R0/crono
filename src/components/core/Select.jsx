import React, { 
  // useState 
} from 'react'

const Field = ({name, items, className, ...selectProps}) => {
  const options = items ? items.map((i) => <option value={i} key={i}>{i}</option>) : null

  return (
    <select className={`form-field${className ? ` ${className}`:''}`} name={name} id={name} {...selectProps}>
      {options}
    </select>
  )
}

export default Field