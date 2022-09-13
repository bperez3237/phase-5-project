import React from 'react'
import WorkWeek from './WorkWeek'

function WorkWeekList({value, workWeeks}) {
   
    const weekElements = workWeeks?.filter((workWeek)=>{
        if (workWeek?.end_date?.includes(value)) {return true} 
        else { return false}
    }).map((workWeek)=><WorkWeek key={workWeek.id} workWeek={workWeek} />)

    return(
        <>
            {weekElements}
        </>
    )
}
export default WorkWeekList;