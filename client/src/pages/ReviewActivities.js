import ActivityList from "../containers/ActivityList";
import {useState} from 'react'
import { ActivityContext } from "../context/ActivitiesContext";

function ReviewActivities() {
    const [activities, setActivities] = useState([])
    

    return(
        <ActivityContext.Provider value={{activities,setActivities}} >
            <ActivityList />
        </ActivityContext.Provider>
    )
}

export default ReviewActivities;