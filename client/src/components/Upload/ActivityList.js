import Activity from "./Activity";
import { useContext} from 'react'
import { ActivitiesContext } from "./context/ActivitiesContext";

function ActivityList() {
    const {activities, setActivities} = useContext(ActivitiesContext)
    
    const activityElems = activities?.map((activity)=>{ return <Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>
        // if (activity.approved === false) {
        //     return <Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>
        // } else return null
    })


    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;