import {Button, Form, ListGroup, Accordion, Card, Container } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function QuantityForm({costCode, workWeek, Col, Row}) {
    const [value, setValue] = useState(0)
    const [submittedStatus, setSubmittedStatus] = useState(false)

    useEffect(()=> {
        setSubmittedStatus(workWeek.units.filter((unit)=>unit.cost_code_id===costCode.id).length>0 ? true : false)
    },[workWeek, costCode])
    
    function handleSubmit(e) {
        e.preventDefault()

        const params = {cost_code_id: costCode.id, quantity: value, work_week_id: workWeek.id}
        fetch(`/units`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(params)
        }).then((r)=>{
            if (r.ok) {
                r.json().then((unit)=>{
                    setSubmittedStatus(true)
                    setValue(0)
                })
            } else {
                r.json().then((err)=>console.log('error',err))
            }
        })
    }

    const activityElems = workWeek.activities?.filter((activity)=>activity.cost_code_id===costCode.id).map((activity)=>{
        return (<ListGroup.Item key={activity.id}>{activity.description} - {activity.total_hours} hours</ListGroup.Item>)
    })
    
    
    function handleClick(e) {
        console.log(e.target.value)
        console.log('here')
        setSubmittedStatus(false)
    }

    return (
        <>
            {submittedStatus ? (
                <Container className='me-auto' style={{border:'1px',borderStyle:'solid'}}>
                    <h2>{costCode.code} is submitted. </h2>
                    <Button onClick={handleClick} className='justify-content-end' value={costCode.code}>Edit</Button>
                </Container>
            ) : (
                <Form className='m-3 p-3' style={{border:'1px',borderStyle:'solid'}} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>{costCode.code}</Form.Label><br></br>
                    {/* <Form.Label>Hours this week: {costCode.last_week_hours}</Form.Label> */}
                    <Form.Control value={value} onChange={(e)=>setValue(e.target.value)}/>
                    {/* <Form.Label>remaining quantity: {costCode.budget_quantity - costCode.last_week_quantity}</Form.Label> */}
                    {/* add custom cost code serializer  WorkWeekSerializer to has_many :costs to get custom params*/}
                    <Button type='submit' >Submit</Button>
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