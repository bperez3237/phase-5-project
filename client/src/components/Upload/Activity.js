import {Button} from 'react-bootstrap'
import { useState } from 'react';
import EditActivityForm from './EditActivityForm'
import CostList from './CostList';
import {formatCurrency} from '../../services/Format/FormatNumber'


function Activity({activity}) {
    const [toggleEdit, setToggleEdit] = useState(false)

    return(
        <div className='white p-3 m-3' style={{border:'1px', borderStyle:'solid'}}>
            <h2>{activity.description} - {activity.total_hours}</h2>
            <div>
                    {!toggleEdit ? (
                    <div>
                        <p>Cost Code: {activity.cost_code.code} - {activity.cost_code.name}</p>
                        <p>Total Hours: {activity.total_hours}</p>
                        <p>Total Cost: {formatCurrency(activity.total_cost)}</p>
                        <Button onClick={()=>setToggleEdit(true)}>Edit</Button>
                    </div>) : (
                        <EditActivityForm setToggleEdit={setToggleEdit} activity={activity}/>)}
                    <CostList costs={activity.costs} />
            </div>
        </div>
    )
}

export default Activity;