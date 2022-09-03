import React from "react";
import CostForm from "../containers/CostForm";
import {useState} from 'react'
import ActivityList from "../containers/ActivityList";


function Upload() {
    const [workWeekId,setWorkWeek] = useState(1)

    function handleWeekChange(e) {
        fetch(`/work_week/${e.target.value}`).then(r=>r.json()).then(data=>{
            console.log(data)
        setWorkWeek(data.id)})
    }

    return (
        <>
            <select onChange={handleWeekChange}>
                <option value="2022-07-24">07/24/22</option>
                <option value="2022-09-04">09/04/22</option>
                <option value="2022-09-11">09/11/22</option>
                <option value="2022-09-18">09/18/22</option>
                <option value="2022-09-25">09/25/22</option>
                <option value="2022-10-02">10/02/22</option>
            </select>
            <CostForm workWeekId={workWeekId}/>
            <ActivityList workWeekId={workWeekId} />
        </>
    )
}

export default Upload;