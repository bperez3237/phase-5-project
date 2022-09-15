import Activity from "./Activity";
import { useContext} from 'react'
import { ActivitiesContext } from "./context/ActivitiesContext";

function ActivityList() {
    const {activities, setActivities} = useContext(ActivitiesContext)
    
    const activityElems = activities?.map((activity)=><Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>)

    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;