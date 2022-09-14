import {Form, Button} from 'react-bootstrap'
import {useState, useContext} from 'react'
import {ActivitiesContext} from './context/ActivitiesContext'
import {replace} from '../../services/UpdateTable/updateObj'

function EditActivityForm({activity, setToggleEdit}) {
    const [value, setValue] = useState('')
    const {activities, setActivities} = useContext(ActivitiesContext)


    function editActivity(e) {
        e.preventDefault()
        // need to fetch and update cost code ID to process or do from backend
        // const updatedActivity = {...activity, cost_code: {...activity.cost_code, code: value }}
        // console.log(updatedActivity)

        const params = {code: value}
        fetch(`/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(params)
        }).then(r=>{
            if (r.ok) {
                r.json().then((updatedActivity)=>{
                    setActivities(replace(activities, updatedActivity))
                    setToggleEdit(false)
                })
            } else {
                r.json().then((err)=>console.log('error',err))
            }
        })
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>Cost Code: </Form.Label>
                <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}></Form.Control>
                <Button type='submit' onClick={editActivity}>Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default EditActivityForm;