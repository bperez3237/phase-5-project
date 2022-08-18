import Activity from "../components/Activity";
import {useState, useEffect} from 'react'

function ActivityList() {
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        fetch('/activities')
            .then(r=>r.json())
            .then((data)=>setActivities(data))
    })

    const activityElems = activities.map((activity)=><Activity key={activity.id} activity={activity} />)

    return( 
        <>{activityElems}</>
        
    )
}

export default ActivityList;