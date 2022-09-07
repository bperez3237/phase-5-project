import Activity from "../components/Activity";
import { useContext} from 'react'
import useFetch from '../hooks/useFetch'
import {WorkWeekContext} from '../context/WorkWeekContext'

function ActivityList({activities, setActivities}) {
    // const {workWeek} = useContext(WorkWeekContext)
    // const {data, setData, loading} = useFetch(`/work_weeks/${workWeek.id}/activities`)
    
    const activityElems = activities?.map((activity)=>{
        if (activity.approved === false) {
            return <Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>
        } else return null
    })


    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;