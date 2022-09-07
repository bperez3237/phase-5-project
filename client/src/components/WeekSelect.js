import useFetch from "../hooks/useFetch"
import {useState} from 'react'
import {Dropdown} from 'react-bootstrap'

function WeekSelect({workWeek, setWorkWeek}) {
    const [value, setValue] = useState(workWeek.id)    
    const {data} = useFetch('/work_weeks')

    function handleWeekChange(e) {
        setValue(e.target.value)
        fetch(`/select_week`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({work_week_id: e.target.value})
        }).then(r=>{
            if (r.ok) {
                r.json().then((data)=>setWorkWeek(data))
            } else {
                r.json().then((error)=>console.log(error))
            }
        })
    }

    const optionsElements = data?.map((workWeek)=><option key={workWeek.id} value={workWeek.id}>{workWeek.end_date}</option>)


    return(
        <select onChange={handleWeekChange} value={value}>
            {optionsElements}
        </select>
    )
}

export default WeekSelect;