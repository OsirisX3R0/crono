import React from "react";

const Item = ({ item }) => (
  <li
    className="border-b-2 border-stone-700 p-3"
    style={{ borderColor: item.color }}
  >
    <strong>
      {item.name}
      <span className=""> - </span>
    </strong>
    {/* <div className="xs:block md:hidden text-sm italic">{item.schedule}</div> */}
    <span>{item.time}</span>
  </li>
);

export default Item;
