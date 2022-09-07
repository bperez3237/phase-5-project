import useFetch from "../hooks/useFetch";
import {useContext, useState} from 'react'
import ProjectInfo from "../components/ProjectInfo";
import { WorkWeekContext} from '../context/WorkWeekContext'

function Home() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const [value, setValue] = useState(workWeek.id)
    const {data, loading} = useFetch('/work_weeks')

    const optionsElements = data?.map((workWeek)=><option key={workWeek.id} value={workWeek.id}>{workWeek.end_date}</option>)

    function handleWeekChange(e) {
        setValue(e.target.value)
        console.log('here')
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

    
    return(
        <>
            <h1>home</h1>
            <select onChange={handleWeekChange} value={value}>
                {optionsElements}
            </select>
            <ProjectInfo />
            <h2>
                View Page: view and search data for all the data bases
            </h2>
            <h2>
                Upload/Review Page: Submit timesheets and review hours before submitting to the weekly report
            </h2>
            <h4>Activities for {workWeek?.end_date} are {workWeek?.activities?.length>0 ? "" : "not "}submitted</h4>
            <h2>
                Enter Quantities Page: Enter units for each cost code in this report
            </h2>
            <h4>Units for {workWeek?.end_date} are {workWeek?.units?.length>0 ? "" : "not "}submitted</h4>
            <h2>
                Weekly Report Page: A Summarized report of completed hours and units 
            </h2>
        </>
        
    )
}

export default Home;