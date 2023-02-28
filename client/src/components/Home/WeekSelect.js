import useFetch from "../../hooks/useFetch"
import {useState, useContext } from 'react'
import DismissableError from '../Error/DismissableError'
import { WorkWeekContext } from "../../context/WorkWeekContext"
import {DropdownButton, Dropdown} from 'react-bootstrap'

function WeekSelect() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const [value, setValue] = useState(workWeek.id)
    const {data} = useFetch('/work_weeks')
    const [error,setError] = useState('')

    function handleWeekChange(e) {
        setValue(e)
        fetch(`/select_week`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({work_week_id: e})
        }).then(r=>{
            if (r.ok) {
                r.json().then((data)=>setWorkWeek(data))
            } else {
                r.json().then((error)=>setError(error))
            }
        })
    }

    const optionsElements = data?.map((workWeek)=><Dropdown.Item key={workWeek.id} eventKey={workWeek.id}>{workWeek.end_date}</Dropdown.Item>)

    return(
        <div className="element week-select">
            {error && <DismissableError error={error} />}
            <h4>Select Week:</h4>
            <DropdownButton id='button' onSelect={handleWeekChange} value={value} title="Week Ending">
                {optionsElements}
            </DropdownButton>
        </div>
    )
}

export default WeekSelect;