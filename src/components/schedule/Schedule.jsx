import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import Column from "../core/Column"

const Schedule = () => {
  const {schedule} = useContext(GlobalContext)

  const scheduleList = schedule.map((item, i) => <li key={i} className='border-b-2 border-stone-700 p-3' style={{borderColor:item.color}}>{item.name} - {item.time}</li>)

  return (
    <Column>
      <ul className="w-full text-center">
        {scheduleList}
      </ul>
    </Column>
  )
}

export default Schedule