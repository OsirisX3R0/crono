import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CronJob from "../../utils/CronJob";

import Column from "../core/Column"
import Job from "./Job";

const Jobs = () => {
  const {jobs, setJobs} = useContext(GlobalContext)
  const [name, setName] = useState('')
  const [schedule, setSchedule] = useState('')
  const [adding, setAdding] = useState(false)

  const addJob = () => {
    setJobs(prevJobs => [...prevJobs, new CronJob({name,schedule})])
    setAdding(false)
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setSchedule('')
  }

  const listItemClass = i => `${i === schedule.length - 1 ? '' : 'border-b-2 border-stone-700 '}p-3`

  const jobList = jobs.map((job, i) => <Job key={i} job={job} listItemClass={listItemClass(i)} />)

  const addForm = adding ? (
    <div>
      <div><label htmlFor="name">Name</label></div>
      <div><input type="text" name="name" id="name" className="text-zinc-900" value={name} onInput={(e) => setName(e.target.value)} /></div>
      <div><label htmlFor="schedule">Schedule</label></div>
      <div><input type="text" name="schedule" id="schedule" className="text-zinc-900" value={schedule} onInput={(e) => setSchedule(e.target.value)} /></div>
      <button className="bg-orange-900 rounded-md p-2" onClick={() => addJob()}>Add</button>
    </div>
  ) : null

  return (
    <Column left>
      <button className="bg-green-900 rounded-md p-2" onClick={() => setAdding(true)}>New Job</button>
      {addForm}      
      <ul>
        {jobList}
      </ul>
    </Column>
  )
}

export default Jobs