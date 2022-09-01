
import React from 'react'

function CodeReport({costCode}) {

    function handleClick(e) {
        console.log(e.target)
        console.log(e.target.value)
    }
    const activityElems = costCode.activities.map((activity)=>{

        // console.log(activity)
        return(
        <p key={activity.id}>{activity.description} - {activity.total_hours}</p>)
    })
    // doesnt get total hours correctly because it gets activity from cost report route. This param is creted when Activity serializer is run

    return(
        <div style={{border:'1px', borderStyle:'solid'}} onClick={handleClick} value={costCode.id}>
            <h1>{costCode.code} - {costCode.name}</h1>
            <h3>Last Week Hours: {costCode.current_hours}</h3>
            <h3>Last Week Quantity: {costCode.current_quantity}</h3>
            <h3>Production Rate: {Math.round(100*(costCode.current_quantity/costCode.current_hours))/100}</h3>
            <h3 onClick={handleClick} value={costCode.id}>Activities:</h3>
            {activityElems}
        </div>
    )
}

export default CodeReport;