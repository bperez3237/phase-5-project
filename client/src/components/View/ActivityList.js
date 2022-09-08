import React from 'react'
import {useState, useEffect} from 'react'
import Activity from './Activity'
import {Container, ButtonGroup, ToggleButton, Button } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

function ActivityList({value, activities}) {
   
    const activityElements = activities?.filter((activity)=>{
        if (activity?.desc?.includes(value) || activity?.cost_code?.code?.includes(value) || activity?.cost_code?.name?.includes(value) ) {return true} 
        else { return false}
    }).map((activity)=><Activity key={activity.id} activity={activity} />)

    return(
        <>
            {activityElements}
        </>
    )
}
export default ActivityList;