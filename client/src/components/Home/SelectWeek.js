import React, {useState} from 'react'
import useWorkWeeks from '../../hooks/useWorkWeeks'

function SelectWeek() {
  const {workWeek, workWeeks, handleWeekChange} = useWorkWeeks()
  const [value, setValue] = useState(workWeek ? workWeek.id : 0)
  const optionsElements = workWeeks?.map((workWeek)=><option key={workWeek.id} value={workWeek.id}>{workWeek.end_date}</option>)

  return (
    <div>
      <div className='select-week element'>
      <div className='select-container'>
        <h4>Select Week</h4>
          <select 
          id='button' 
          name='Select Week'
          value={value}
          onChange={(e)=>{
            setValue(e.target.value)
            handleWeekChange(e.target.value)
          }}>
            {optionsElements}
          </select>
        </div>
      </div>

      <div className='overlay'></div>
    </div>
  )
}

export default SelectWeek