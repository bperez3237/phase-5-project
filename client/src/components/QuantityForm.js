import {Button, Form } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function QuantityForm({ costCode}) {
    const [value, setValue] = useState(0)
    const [cc,setCc] = useState(costCode)
    const [activities, setActivities] = useState([])


    useEffect(()=> {
        fetch(`/cost_codes/${costCode.id}/activities`).then(r=>r.json()).then(data=>setActivities(...activities,data))
    },[])

    // console.log(activity)
    function handleSubmit(e) {
        e.preventDefault()

        const newCcObj = {...costCode, current_quantity: costCode.current_quantity+value}
        fetch(`/cost_codes/${costCode.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newCcObj)
        }).then((r)=>{
            if (r.ok) {
                r.json().then((updatedCc)=>console.log(updatedCc))
            } else {
                r.json().then((err)=>console.log('error',err))
            }
        })
        setValue(0)
    }


    function total_hours(activity) {
        // if (activity.costs) {
        //     return activity.costs.reduce((previousValue, currentValue)=> previousValue.hours + previousValue.hours,0)
        // } else return 0
        console.log('here')
        

        // console.log(activity.costs.reduce((previousValue, currentValue)=> {
        //     console.log(previousValue,currentValue)
        //     previousValue.hours + previousValue.hours},0))
    }
    // console.log(activities.reduce((previousValue, currentValue)=> previousValue.hours + previousValue.hours,0))


    const activityElems = activities.map((activity)=>{
        console.log(activity)
        return (<>
            <li>{activity.description}</li>
            <Button onClick={()=>total_hours(activity)} >total hours</Button>
        </>)
    })
    


    return (
        <Form style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
            <Form.Group>
                {/* <h3>{activity.description}</h3> */}
                <Form.Label>{costCode.code}</Form.Label>
                <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                <h3>remaining quantity: {costCode.budget_quantity - costCode.current_quantity}</h3>
                <Button type='submit' >Submit</Button>
                {activityElems}
            </Form.Group>
            
        </Form>
    )
}
export default QuantityForm;