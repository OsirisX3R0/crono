import React, { useState, useEffect } from 'react'

const Button = ({color, children, className, ...btnProps}) => {
  const [hoverColor, setHoverColor] = useState(color)
  
  useEffect(() => {
    let [bg, col, num] = color.split('-')
    let darker = +num + 200
    setHoverColor(`hover:${bg}-${col}-${darker >= 900 ? 900 : darker}`)
  }, [color])

  return <button className={`${className ? `${className} ` : ''}${color} ${hoverColor} xs:w-full md:w-auto rounded-md p-2`} {...btnProps}>{children}</button>
}

export default Button