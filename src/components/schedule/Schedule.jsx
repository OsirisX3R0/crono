import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import Item from "./Item";

const Schedule = () => {
  const {schedule} = useContext(GlobalContext)

  const scheduleList = schedule.map((item, i) => <Item key={i} item={item} />)

  return (
    <div className="h-[89.5vh] overflow-y-scroll p-4">
      <ul className="w-full text-center">
        {scheduleList}
      </ul>
    </div>
  )
}

export default Schedule