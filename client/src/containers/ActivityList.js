import Activity from "../components/Activity";
import { useEffect, useState,  useContext} from 'react'
import useFetch from '../hooks/useFetch'
import {Container} from 'react-bootstrap'

function ActivityList({workWeekId}) {
    const {data,loading,error} = useFetch(`/work_weeks/${workWeekId}/activities`)
    
    const activityElems = loading ? <h1>loading...</h1> : data.map((activity)=>{
        if (activity.approved === false) {
            return <Activity key={activity.id} activity={activity}/>
        } else return null
    })


    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;