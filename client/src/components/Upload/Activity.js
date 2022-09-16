import {Button, Card} from 'react-bootstrap'
import { useState } from 'react';
import EditActivityForm from './EditActivityForm'
import CostList from './CostList';
import {formatCurrency} from '../../services/Format/FormatNumber'


function Activity({activity}) {
    const [toggleEdit, setToggleEdit] = useState(false)

    return(
        <Card className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{activity.description} - {activity.total_hours}</Card.Title>
            <Card.Body>
                    {!toggleEdit ? (
                    <>
                        <Card.Text>Cost Code: {activity.cost_code.code} - {activity.cost_code.name}</Card.Text>
                        <Card.Text>Total Hours: {activity.total_hours}</Card.Text>
                        <Card.Text>Total Cost: {formatCurrency(activity.total_cost)}</Card.Text>
                        <Button onClick={()=>setToggleEdit(true)}>Edit</Button>
                    </>) : (
                        <EditActivityForm setToggleEdit={setToggleEdit} activity={activity}/>)}
                    <CostList costs={activity.costs} />
            </Card.Body>
        </Card>
    )
}

export default Activity;