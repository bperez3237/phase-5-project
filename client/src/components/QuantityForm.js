import {Button, Form } from 'react-bootstrap'
import {useState} from 'react'

function QuantityForm({activity}) {
    const [value, setValue] = useState(0)
    // const cc = activity.cost_code

    // console.log(activity)
    function handleSubmit(e) {
        e.preventDefault()

        const newCcObj = {...activity.cost_code, current_quantity: activity.cost_code.current_quantity+value}
        console.log(newCcObj)
        fetch(`/cost_codes/${activity.cost_code_id}`, {
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


    return (
        <Form style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
            <Form.Group>
                <h3>{activity.description}</h3>
                <Form.Label>{activity.cost_code.code}</Form.Label>
                <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                <h3>remaining quantity: {activity.cost_code.budget_quantity - activity.cost_code.current_quantity}</h3>
                <Button type='submit' >Submit</Button>
            </Form.Group>
        </Form>
    )
}
export default QuantityForm;