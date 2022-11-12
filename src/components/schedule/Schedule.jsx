import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import Column from "../core/Column"

const Schedule = () => {
  const {schedule} = useContext(GlobalContext)

  const listItemClass = i => `${i === schedule.length - 1 ? '' : 'border-b-2 border-stone-700 '}p-3`

  const scheduleList = schedule.map((item, i) => <li key={i} className={listItemClass(i)}>{item.name} - {item.time}</li>)

  return (
    <Column>
      <ul className="w-full text-center">
        {scheduleList}
      </ul>
    </Column>
  )
}

export default Schedule