import {Button, Form } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import TotalHours from './TotalHours'

function QuantityForm({ costCode}) {
    const [value, setValue] = useState(0)
    const [cc,setCc] = useState(costCode)
    const [activities, setActivities] = useState([])
    const [submittedStatus, setSubmittedStatus] = useState(false)


    useEffect(()=> {
        fetch(`/cost_codes/${costCode.id}/activities`).then(r=>r.json()).then(data=>setActivities(data))
    },[])

    function handleSubmit(e) {
        e.preventDefault()

        const params = {cost_code_id: costCode.id, quantity: value}
        fetch(`/units`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(params)
        }).then((r)=>{
            if (r.ok) {
                r.json().then((unit)=>{
                    setSubmittedStatus(true)
                    console.log(unit)
                })
            } else {
                r.json().then((err)=>console.log('error',err))
            }
        })
    }



    const activityElems = activities.map((activity)=>{
        return (<div key={activity.id}>
            <p>{activity.description}</p><TotalHours id={activity.id}/>
        </div>)
    })
    

    if (submittedStatus) {return <h2>{cc.code} is submitted. </h2>}
    else {return (
        <Form style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>{costCode.code}</Form.Label>
                <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                <Form.Label>remaining quantity: {costCode.budget_quantity - costCode.current_quantity}</Form.Label>
                <Button type='submit' >Submit</Button>
                {activityElems}
            </Form.Group>
            
        </Form>
    )}
}
export default QuantityForm;