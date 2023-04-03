import React from 'react'
import {Card} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber.ts'

function ActivityList({value, activities}) {
   
    const activityElements = activities?.filter((activity)=>{
        if (activity?.desc?.includes(value) || activity?.cost_code?.code?.includes(value) || activity?.cost_code?.name?.includes(value) ) {return true} 
        else { return false}
    }).map((activity)=>{
        return(
            <Card key={activity?.id} className='element'>
                <Card.Body>
                    <Card.Title>Description: {activity?.description} - Hours: {formatNumber(activity?.total_hours)}</Card.Title>
                    <Card.Text>{activity?.cost_code?.code} - {activity?.cost_code?.name}</Card.Text>
                    <Card.Text>Cost: {formatCurrency(activity?.total_cost)}</Card.Text>
                    <Card.Text>Work Week: {activity?.work_week?.end_date} </Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return(
        <>
            {activityElements}
        </>
    )
}
export default ActivityList;