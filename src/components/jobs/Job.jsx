const Job = ({job, listItemClass}) => {
  
  return (
    <li className={listItemClass}>
      <h3 className="underline">{job.name}</h3>
      <h4>{job.schedule}</h4>
      <div className="text-sm text-stone-400 italic">{job.humanizedSchedule}</div>
    </li>
  )
}

export default Job