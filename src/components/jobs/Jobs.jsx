import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CronJob from "../../utils/CronJob";
import Button from "../core/Button";

import Field from "../core/Field";
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

  const jobList = jobs.map((job, i) => <Job key={i} job={job} />)

  const addForm = adding ? (
    <div>
      <Field label="Name" className="mb-2" value={name} onInput={(e) => setName(e.target.value)} />
      <Field label="Schedule" className="mb-2" value={schedule} onInput={(e) => setSchedule(e.target.value)} />
      <Button color="bg-orange-700" onClick={() => addJob()}>Add</Button>
    </div>
  ) : null

  return (
    <div className="xs:h-64 sm:h-[89.5vh] overflow-y-scroll p-4">
      <Button color="bg-emerald-700" onClick={() => setAdding(true)}>New Job</Button>
      {addForm}      
      <ul className="xs:hidden xs:h-0 sm:h-auto sm:block">
        {jobList}
      </ul>
    </div>
  )
}

export default Jobs