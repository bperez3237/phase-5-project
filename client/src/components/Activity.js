import { useContext } from 'react'
import {Button} from 'react-bootstrap'
import {ActivitiesContext} from '../context/ActivitiesContext'

function Activity({activity}) {
    const {activities, setActivities} = useContext(ActivitiesContext)

    function handleApprove() {
        console.log('approve')
        fetch(`/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...activity, approved: true})
        }).then(r=>r.json()).then((data)=>setActivities([...activities.filter((activity)=>activity.id!==data.id),data]))
    }

    function handleReject() {
        console.log('reject')
        fetch(`/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...activity, approved: null})
        }).then(r=>r.json()).then((data)=>setActivities([...activities.filter((activity)=>activity.id!==data.id),data]))
    }

    return(
        <div style={{border:'1px', borderStyle:'solid'}}>
            <h2>CC id: {activity.cost_code_id}</h2>
            <p>{activity.description} - {activity.total_hours}</p>
            <Button onClick={handleApprove}>Approve</Button>
            <Button onClick={handleReject}>Reject</Button>
        </div>
    )
}

export default Activity;