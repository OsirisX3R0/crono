import React, { useContext, useState } from "react";
// import Modal from 'react-modal'
import { GlobalContext } from "../../context/GlobalContext";
import CronJob from "../../utils/CronJob";
import Modal from '../core/Modal'
import Field from "../core/Field";
import Button from "../core/Button";
import Job from "./Job";

const Jobs = () => {
  const {jobs, setJobs} = useContext(GlobalContext)
  const [name, setName] = useState('')
  const [schedule, setSchedule] = useState('')
  const [adding, setAdding] = useState(false)
  const [showJobs, setShowJobs] = useState(false)

  const addJob = () => {
    setJobs(prevJobs => [...prevJobs, new CronJob({name,schedule})])
    setAdding(false)
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setSchedule('')
  }

  const addFormStyles = {
    content: {
      width: '240px',
      height: '240px',
      backgroundColor: '#262626',
      color: '#f8fafc',
      margin: '75px auto 0'
    }
  }

  const jobsModalStyles = {
    content:{
    ...addFormStyles.content,
      height: '400px'
    }
  }

  const jobList = jobs.map((job, i) => <Job key={i} job={job} />)

  const addForm = (
    <Modal 
      isOpen={adding}
      onRequestClose={() => setAdding(false)}
      style={addFormStyles}
    >
      <Field label="Name" className="mb-2" value={name} onInput={(e) => setName(e.target.value)} />
      <Field label="Schedule" className="mb-2" value={schedule} onInput={(e) => setSchedule(e.target.value)} />
      <Button color="bg-orange-700" onClick={() => addJob()}>Add</Button>
    </Modal>
  )

  const jobsModal = (
    <Modal 
      isOpen={showJobs}
      onRequestClose={() => setShowJobs(false)}
      style={jobsModalStyles}
    >
      <ul>
        {jobList}
      </ul>
    </Modal>
  )

  return (
    <div className="xs:h-28 md:h-[78vh] xs:overflow-hidden md:overflow-y-scroll p-4">
      <Button color="bg-emerald-700" className="xs:mb-2" onClick={() => setAdding(true)}>New Job</Button>
      <Button color="bg-sky-600" className='xs:block md:hidden' onClick={() => setShowJobs(true)}>Show Jobs</Button>
      <ul className="xs:hidden md:block xs:h-0 md:h-auto">
        {jobList}
      </ul>
      {addForm}
      {jobsModal}
    </div>
  )
}

export default Jobs