import useFetch from "../hooks/useFetch";
import {useState} from 'react'
import ProjectInfo from "../components/ProjectInfo";

function Home() {
    const [value, setValue] = useState(1)
    const {data, loading} = useFetch('/work_weeks')
    
    // function handleSelect(e) {
    //     setValue(e.target.value)
    // }
    const optionsElements = (loading) ? <option>loading...</option> : data.map((workWeek)=><option key={workWeek.id} value={workWeek.id}>{workWeek.end_date}</option>)

    const thisWorkWeek = data.find((workWeek)=>workWeek.id==value)

    // console.log(thisWorkWeek)
    if (loading) return <h1>loading...</h1>
    return(
        <>
            <h1>home</h1>
            <select onChange={(e)=>setValue(e.target.value)} value={value}>
                {optionsElements}
            </select>
            <ProjectInfo />
            <h2>
                View Page: view and search data for all the data bases
            </h2>
            <h2>
                Upload/Review Page: Submit timesheets and review hours before submitting to the weekly report
            </h2>
            <h4>Activities for {thisWorkWeek?.end_date} are {thisWorkWeek?.activities.length>0 ? "" : "not "}submitted</h4>
            <h2>
                Enter Quantities Page: Enter units for each cost code in this report
            </h2>
            <h4>Units for {thisWorkWeek?.end_date} are {thisWorkWeek?.units.length>0 ? "" : "not "}submitted</h4>
            <h2>
                Weekly Report Page: A Summarized report of completed hours and units 
            </h2>
        </>
        
    )
}

export default Home;