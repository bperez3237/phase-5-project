import React from 'react'
import useFetch from '../../hooks/useFetch'
import {Col, Container, Row} from 'react-bootstrap'
import {formatCurrency} from '../../services/Format/FormatNumber'


function CodeReport({costCodeId, workWeekId}) {
    const {data} = useFetch(`/work_weeks/${workWeekId}/cost_codes/${costCodeId}`)
  
    const activityElems = data?.activities?.map((activity)=><p key={activity.id}>{activity.description} - {activity.total_hours}</p>)

    const budgetprodrate = Math.round(100*(data?.budget_quantity/data?.budget_hours))/100

    // value = ((actual_quantity/budget_rate)-actual hours)*labor_rate
    const estimatedValue = ((data?.last_week_quantity/budgetprodrate) - data?.last_week_hours)*(data?.last_week_cost/data?.last_week_hours)
    const clr = estimatedValue >= 0 ? 'green' : 'red'
    return(
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Row>
                <Col>
                    <h1>{data?.code} - {data?.name}</h1>
                </Col>
                <Col>
                    <h3 style={{color:clr}}>Estimated Value: {formatCurrency((estimatedValue*100)/100)} </h3>
                </Col>
            </Row>
            <Row>
            <Col>
            <p>Last Week Hours: {data?.last_week_hours}</p>
            <p>Last Week Quantity: {data?.last_week_quantity}</p>
            <p>Last Week Production Rate: {Math.round(100*(data?.last_week_quantity/data?.last_week_hours))/100}</p>
            </Col>
            <Col>
            <p>Budget Hours: {data?.budget_hours}</p>
            <p>Budget Quantity: {data?.budget_quantity}</p>
            <p>Budget Production Rate: {Math.round(100*(data?.budget_quantity/data?.budget_hours))/100}</p>
            </Col>
            </Row>
            <Row>
                <Col>
                {/* <p>Activities:</p>
                {activityElems} */}
                </Col>
            </Row>
        </Container>
    )
}

export default CodeReport;