const Job = ({job, listItemClass}) => {
  
  return (
    <li className={listItemClass}>
        <div className="font-bold">{job.name}</div>
        <div>{job.schedule} (<span className="text-stone-400 italic">{job.humanizedSchedule}</span>)</div>
      </li>
  )
}

export default Job