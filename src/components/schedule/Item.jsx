import React from "react";
import Tooltip from "react-simple-tooltip"

const Item = ({ item }) => (
  <li
    className="border-b-2 border-stone-700 p-3"
    style={{ borderColor: item.color }}
  >
    {/* <Tooltip placement="bottom" content={item.humanizedSchedule} customCss={{width: '500px'}} zIndex={20}> */}
    <strong>{item.name}</strong>
    <div className="xs:block sm:hidden text-sm italic">{item.schedule}</div>
    <span>{item.time}</span>
    {/* </Tooltip> */}
  </li>
);

export default Item;
