import {Form, Button} from 'react-bootstrap'
import {useState, useContext} from 'react'
import {ActivitiesContext} from './context/ActivitiesContext'
import {replace} from '../../services/UpdateTable/updateObj'
import DismissableError from '../DismissableError'

function EditActivityForm({activity, setToggleEdit}) {
    const [value, setValue] = useState('')
    const [error,setError] = useState('')
    const {activities, setActivities} = useContext(ActivitiesContext)


    function editActivity(e) {
        e.preventDefault()

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
                })
            } else {
                r.json().then((err)=>setError(err))
            }
        })
    }
    return(
        <>
        {error && <DismissableError error={error}/>}
            <Form>
                <Form.Group>
                    <Form.Label>Cost Code: </Form.Label>
                    <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}></Form.Control>
                    <Button type='submit' onClick={editActivity}>Submit</Button>
                    <Button onClick={()=>setToggleEdit(false)}>Cancel</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default EditActivityForm;