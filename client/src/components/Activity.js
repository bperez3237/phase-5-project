import {Button} from 'react-bootstrap'

function Activity({activity}) {

    function handleApprove() {
        console.log('approve')
    }

    function handleReject() {
        console.log('reject')
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