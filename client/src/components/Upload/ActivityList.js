import Activity from "./Activity";
import { useContext} from 'react'
import { ActivitiesContext } from "./context/ActivitiesContext";

function ActivityList() {
    const {activities, setActivities} = useContext(ActivitiesContext)
    
    const activityElems = activities?.sort((a,b)=> a.id - b.id).map((activity)=>{
        return <Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>
    })

    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;