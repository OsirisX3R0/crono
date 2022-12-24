import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltip = ({id, children, ...tooltipProps}) => {
  return (
    <>
      <div id={id}>
        {children}
      </div>
      <ReactTooltip anchorId={id} {...tooltipProps} />
    </>
  )
}

export default Tooltip