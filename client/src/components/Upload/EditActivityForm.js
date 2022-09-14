import {Form, Button} from 'react-bootstrap'
import {useState, useContext} from 'react'
import {ActivitiesContext} from './context/ActivitiesContext'

function EditActivityForm({setToggleEdit}) {
    const [value, setValue] = useState('')
    const {activities, setActivities} = useContext(ActivitiesContext)


    function editActivity(e) {
        e.preventDefault()
        // console.log('approve')
        // setToggleEdit(!toggleEdit)
        console.log(value)
        // fetch(`/activities/${activity.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }, body: JSON.stringify({...activity, approved: true})
        // }).then(r=>r.json()).then((data)=>setActivities([...activities.filter((activity)=>activity.id!==data.id),data]))
        setToggleEdit(false)
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