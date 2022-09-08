import useFetch from "../../hooks/useFetch"
import {useState} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'

function WeekSelect({workWeek, setWorkWeek}) {
    const [value, setValue] = useState(workWeek.id)    
    const {data} = useFetch('/work_weeks')

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
                r.json().then((error)=>console.log(error))
            }
        })
    }

    const optionsElements = data?.map((workWeek)=><Dropdown.Item key={workWeek.id} eventKey={workWeek.id}>{workWeek.end_date}</Dropdown.Item>)

    return(
        <DropdownButton onSelect={handleWeekChange} value={value} title="Select Work Week:">
            {optionsElements}
        </DropdownButton>
    )
}

export default WeekSelect;