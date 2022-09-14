import {Button, Card} from 'react-bootstrap'
import { useContext, useState } from 'react';
import { ActivitiesContext } from "./context/ActivitiesContext";
import EditActivityForm from './EditActivityForm'
import {formatCurrency} from '../../services/Format/FormatNumber'


function Activity({activity}) {
    const {activities, setActivities} = useContext(ActivitiesContext)
    const [toggleEdit, setToggleEdit] = useState(false)

    console.log(activity)
    

    function editActivity() {
        console.log('approve')
        setToggleEdit(!toggleEdit)
        // fetch(`/activities/${activity.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }, body: JSON.stringify({...activity, approved: true})
        // }).then(r=>r.json()).then((data)=>setActivities([...activities.filter((activity)=>activity.id!==data.id),data]))
    }

    function editCost() {
        console.log('cost')
    }
    // function handleReject() {
    //     console.log('reject')
    //     fetch(`/activities/${activity.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, body: JSON.stringify({...activity, approved: null})
    //     }).then(r=>r.json()).then((data)=>setActivities([...activities.filter((activity)=>activity.id!==data.id),data]))
    // }

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{activity.description} - {activity.total_hours}</Card.Title>
            <Card.Body>
                {!toggleEdit ? (
                    <>
                        <Card.Text>Cost Code: {activity.cost_code.code} - {activity.cost_code.name}</Card.Text>
                        <Card.Text>Total Hours: {activity.total_hours}</Card.Text>
                        <Card.Text>Total Cost: {activity.total_cost}</Card.Text>
                        <Button onClick={editActivity}>Edit</Button>
                    </>) : (
                        <EditActivityForm setToggleEdit={setToggleEdit}/>)}
                
            </Card.Body>
        </Card>
    )
}

export default Activity;