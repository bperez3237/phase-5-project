import ActivityList from "../containers/ActivityList";
import {useState} from 'react'

function ReviewActivities() {
    const [activities, setActivities] = useState([])
    

    return(
        <>
            <ActivityList />
        </>
    )
}

export default ReviewActivities;