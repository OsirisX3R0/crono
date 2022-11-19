const Job = ({job}) => {
  return (
    <li className='border-b-2 border-stone-700 p-3' style={{borderColor:job.color}}>
      <h3 className="underline">{job.name}</h3>
      <h4>{job.schedule}</h4>
      <div className="text-sm text-stone-400 italic">{job.humanizedSchedule}</div>
    </li>
  )
}

export default Job