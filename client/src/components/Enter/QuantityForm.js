import {Button, Form, ListGroup, Accordion, InputGroup } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import SubmittedCode from './SubmittedCode'
import DismissableError from '../Error/DismissableError'

function QuantityForm({costCode, workWeek, Col, Row}) {
    const [value, setValue] = useState(0)
    const [submittedStatus, setSubmittedStatus] = useState(false)
    const [error, setError] = useState('')


    useEffect(()=> {
        setSubmittedStatus(workWeek.units.filter((unit)=>unit.cost_code_id===costCode.id).length>0 ? true : false)
    },[workWeek, costCode])

    useEffect(()=>setValue(0),[error])
    
    function handleSubmit(e) {
        e.preventDefault()
        setError('')
        const params = {cost_code_id: costCode.id, quantity: value, work_week_id: workWeek.id}
        fetch(`/units`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(params)
        }).then((r)=>{
            if (r.ok) {
                r.json().then(()=>{
                    setSubmittedStatus(true)
                    setValue(0)
                })
            } else {
                r.json().then((err)=>setError(err.error))
            }
        })
    }

    const activityElems = workWeek.activities?.filter((activity)=>activity.cost_code_id===costCode.id).map((activity)=>{
        return (<ListGroup.Item key={activity.id}>{activity.description} - {activity.total_hours} hours</ListGroup.Item>)
    })
    

    return (
        <>
        {error && <DismissableError error={error}/>}
            {submittedStatus ? (
                <SubmittedCode workWeek={workWeek} setSubmittedStatus={setSubmittedStatus} costCode={costCode} />
            ) : (
                <Form className='m-3 p-3' style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label column='lg' >{costCode.code}</Form.Label><br></br>
                    <InputGroup>
                    <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <Button type='submit' >Submit</Button>
                    </InputGroup>
                    <Accordion defaultActiveKey={["0"]}>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Activities:</Accordion.Header>
                            <Accordion.Body><ListGroup>{activityElems}</ListGroup></Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Form.Group>
            </Form>
            )}
        </>
    )
}
export default QuantityForm;