import {Button} from 'react-bootstrap'

function Activity({activity}) {

    function handleApprove() {
        console.log('approve')
        fetch(`/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...activity, approved: true})
        }).then(r=>r.json()).then((data)=>console.log(data))
    }

    function handleReject() {
        console.log('reject')
        fetch(`/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...activity, approved: null})
        }).then(r=>r.json()).then((data)=>console.log(data))
    }

    return(
        <div style={{border:'1px', borderStyle:'solid'}}>
            <h2>CC id: {activity.cost_code_id}</h2>
            <p>{activity.description}</p>
            <Button onClick={handleApprove}>Approve</Button>
            <Button onClick={handleReject}>Reject</Button>
        </div>
    )
}

export default Activity;