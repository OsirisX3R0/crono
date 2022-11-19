import React, { useMemo } from 'react'

const Button = ({color, children, ...btnProps}) => {
  const hoverColor = useMemo(() => {
    let [col, num] = color.split('-')
    let darker = +num + 200
    return `${col}-${darker >= 900 ? 900 : darker}`
  }, [color])

  return <button className={`bg-${color} hover:bg-${hoverColor} rounded-md p-2`} {...btnProps}>{children}</button>
}

export default Button