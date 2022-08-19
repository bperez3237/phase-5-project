import {Button, Form } from 'react-bootstrap'
import {useState,useEffect} from 'react'

function QuantityForm({activity}) {
    const [value, setValue] = useState(0)
    const cc = activity.cost_code

    function handleSubmit(e) {
        e.preventDefault()
        
    }


    return (
        <Form style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
            <Form.Group>
                <h3>{activity.description}</h3>
                <Form.Label>{cc.code}</Form.Label>
                <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                <h3>remaining quantity: {cc.budget_quantity - cc.current_quantity}</h3>
                <Button type='submit' >Submit</Button>
            </Form.Group>
        </Form>
    )
}
export default QuantityForm;