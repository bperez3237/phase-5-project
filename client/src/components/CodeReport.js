
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

function CodeReport({costCode}) {

    function handleClick(e) {
        console.log(e.target)
        console.log(e.target.value)
    }
    const activityElems = costCode.activities.map((activity)=><p key={activity.id}>{activity.description} - {activity.total_hours}</p>)
    // doesnt get total hours correctly because it gets activity from cost report route. This param is creted when Activity serializer is run

    console.log(costCode)

    const lbprodrate = Math.round(100*(costCode.current_quantity/costCode.current_hours))/100
    const budgetprodrate = Math.round(100*(costCode.budget_quantity/costCode.budget_hours))/100

    // = ((actual_quantity/budget_rate)-actual hours)*labor_rate
    const estimatedValue = ((costCode.current_quantity/budgetprodrate) - costCode.current_hours)


    return(
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Row>
                <Col>
                    <h1>{costCode.code} - {costCode.name}</h1>
                </Col>
                <Col>
                    <h3>Estimated Value: {} </h3>
                </Col>
            </Row>
            <Row>
            <Col>
            <p>Last Week Hours: {costCode.current_hours}</p>
            <p>Last Week Quantity: {costCode.current_quantity}</p>
            <p>Last Week Production Rate: {Math.round(100*(costCode.current_quantity/costCode.current_hours))/100}</p>
            </Col>
            <Col>
            <p>Budget Hours: {costCode.budget_hours}</p>
            <p>Budget Quantity: {costCode.budget_quantity}</p>
            <p>Budget Production Rate: {Math.round(100*(costCode.budget_quantity/costCode.budget_hours))/100}</p>
            </Col>
            
            
            </Row>
            <Row>
                <Col>
                <p>Activities:</p>
                {activityElems}
                </Col>
                
            </Row>
        </Container>
    )
}

export default CodeReport;