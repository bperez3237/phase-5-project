
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

function CodeReport({costCode}) {
    const activityElems = costCode.activities.map((activity)=><p key={activity.id}>{activity.description} - {activity.total_hours}</p>)

    const budgetprodrate = Math.round(100*(costCode.budget_quantity/costCode.budget_hours))/100

    // value = ((actual_quantity/budget_rate)-actual hours)*labor_rate
    const estimatedValue = ((costCode.last_week_quantity/budgetprodrate) - costCode.last_week_hours)*(costCode.last_week_cost/costCode.last_week_hours)
    const clr = estimatedValue >= 0 ? 'green' : 'red'
    return(
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Row>
                <Col>
                    <h1>{costCode.code} - {costCode.name}</h1>
                </Col>
                <Col>
                    <h3 style={{color:clr}}>Estimated Value: {Math.round(estimatedValue*100)/100} </h3>
                </Col>
            </Row>
            <Row>
            <Col>
            <p>Last Week Hours: {costCode.last_week_hours}</p>
            <p>Last Week Quantity: {costCode.last_week_quantity}</p>
            <p>Last Week Production Rate: {Math.round(100*(costCode.last_week_quantity/costCode.last_week_hours))/100}</p>
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