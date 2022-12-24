// import Tooltip from "react-simple-tooltip"

const Job = ({job}) => {
  return (
    <li className='xs:text-xs md:text-base border-b-2 border-stone-700 p-3' style={{borderColor:job.color}}>
      <div className="xs:text-base sm:text-2xl underline">{job.name}</div>
      {/* <Tooltip placement="bottom" content={job.humanizedSchedule} customCss={{width: '500px'}} zIndex={20}> */}
        <div className="xs:text-base sm:text-xl font-semibold">{job.schedule}</div>
      {/* </Tooltip> */}
      <div className="xs:text-xs sm:text-sm text-stone-400 italic">{job.humanizedSchedule}</div>
    </li>
  )
}

export default Job