import {Button, Card, ListGroup, Accordion} from 'react-bootstrap'
import { useContext, useState } from 'react';
import { ActivitiesContext } from "./context/ActivitiesContext";
import EditActivityForm from './EditActivityForm'
import {formatCurrency} from '../../services/Format/FormatNumber'
import CostList from './CostList';


function Activity({activity}) {
    const {activities, setActivities} = useContext(ActivitiesContext)
    const [toggleEdit, setToggleEdit] = useState(false)

    console.log(toggleEdit)
    

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{activity.description} - {activity.total_hours}</Card.Title>
            <Card.Body>
                {/* <Button onClick={setToggleEdit}>Edit</Button> */}
                    {!toggleEdit ? (
                    <>
                        <Card.Text>Cost Code: {activity.cost_code.code} - {activity.cost_code.name}</Card.Text>
                        <Card.Text>Total Hours: {activity.total_hours}</Card.Text>
                        <Card.Text>Total Cost: {activity.total_cost}</Card.Text>
                        <Button onClick={()=>setToggleEdit(true)}>Edit</Button>
                    </>) : (
                        <EditActivityForm setToggleEdit={setToggleEdit} activity={activity}/>)}
                    <CostList costs={activity.costs} />
            </Card.Body>
        </Card>
    )
}

export default Activity;