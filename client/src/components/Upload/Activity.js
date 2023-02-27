import { useState } from 'react';
import EditActivityForm from './EditActivityForm'
import CostList from './CostList';
import {formatCurrency} from '../../services/Format/FormatNumber'


function Activity({activity}) {
    const [toggleEdit, setToggleEdit] = useState(false)

    return(
        <div className='element m-3 p-3'>
            <h2>{activity.description} - {activity.total_hours}</h2>
            <div>
                    {!toggleEdit ? (
                    <div>
                        <p>Cost Code: {activity.cost_code.code} - {activity.cost_code.name}</p>
                        <p>Total Hours: {activity.total_hours}</p>
                        <p>Total Cost: {formatCurrency(activity.total_cost)}</p>
                        <button id='button' onClick={()=>setToggleEdit(true)}>Edit</button>
                    </div>) : (
                        <EditActivityForm setToggleEdit={setToggleEdit} activity={activity}/>)}
                    <CostList costs={activity.costs} />
            </div>
        </div>
    )
}

export default Activity;