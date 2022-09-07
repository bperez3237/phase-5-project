import Activity from "../components/Activity";
import { useContext} from 'react'
import useFetch from '../hooks/useFetch'
import {WorkWeekContext} from '../context/WorkWeekContext'

function ActivityList() {
    const {workWeek} = useContext(WorkWeekContext)
    const {data, setData, loading} = useFetch(`/work_weeks/${workWeek?.id}/activities`)
    
    const activityElems = loading ? <h1>loading...</h1> : data.map((activity)=>{
        if (activity.approved === false) {
            return <Activity key={activity.id} activity={activity} activities={data} setActivities={setData}/>
        } else return null
    })


    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;