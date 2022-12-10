import React from "react";

const Item = ({ item }) => (
  <li
    className="border-b-2 border-stone-700 p-3"
    style={{ borderColor: item.color }}
  >
    <span className="font-bold">{item.name}</span> - {item.time}
  </li>
);

export default Item;
