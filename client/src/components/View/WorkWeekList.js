import React from 'react'
import {Card} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber.ts'


function WorkWeekList({value, workWeeks}) {
   
    const weekElements = workWeeks?.filter((workWeek)=>{
        if (workWeek?.end_date?.includes(value)) {return true} 
        else { return false}
    }).map((workWeek)=>{
        return(
            <Card key={workWeek?.id} className='element'>
                <Card.Body>
                    <Card.Title>Week: {workWeek?.end_date}</Card.Title>
                    <Card.Text>Total Hours: {formatNumber(workWeek?.total_hours)}</Card.Text>
                    <Card.Text>Total Cost: {formatCurrency(workWeek?.total_cost)}</Card.Text>
                    <Card.Text>Value Earned: {formatCurrency(workWeek?.estimated_value)}</Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return(
        <>
            {weekElements}
        </>
    )
}
export default WorkWeekList;