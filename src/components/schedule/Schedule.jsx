import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import Column from "../core/Column"
import Item from "./Item";

const Schedule = () => {
  const {schedule} = useContext(GlobalContext)

  const scheduleList = schedule.map((item, i) => <Item key={i} item={item} />)

  return (
    <Column>
      <ul className="w-full text-center">
        {scheduleList}
      </ul>
    </Column>
  )
}

export default Schedule