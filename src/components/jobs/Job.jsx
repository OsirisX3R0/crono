import Tooltip from "react-simple-tooltip"

const Job = ({job}) => {
  return (
    <li className='border-b-2 border-stone-700 p-3' style={{borderColor:job.color}}>
      <h3 className="xs:hidden sm:block underline">{job.name}</h3>
      <Tooltip placement="bottom" content={job.humanizedSchedule} customCss={{width: '500px'}} zIndex={20}>
        <h4 id={job.schedule}>{job.schedule}</h4>
      </Tooltip>
      <div className="xs:hidden sm:block text-sm text-stone-400 italic">{job.humanizedSchedule}</div>
    </li>
  )
}

export default Job