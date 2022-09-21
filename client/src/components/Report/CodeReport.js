import React from 'react'
import useFetch from '../../hooks/useFetch'
import {Col, Container, Row} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'
import Loading from '../Loading'
import DismissableError from '../DismissableError'


function CodeReport({costCodeId, workWeekId}) {
    const {data, loading, error} = useFetch(`/work_weeks/${workWeekId}/cost_codes/${costCodeId}`)

    const budgetprodrate = Math.round(100*(data?.budget_quantity/data?.budget_hours))/100

    const estimatedValue = ((data?.last_week_quantity/budgetprodrate) - data?.last_week_hours)*(data?.last_week_cost/data?.last_week_hours)
    const clr = estimatedValue >= 0 ? 'green' : 'red'
    return(
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            {loading && <Loading />}
            {error && <DismissableError error={error} />}
            <Row>
                <Col>
                    <h1>{data?.code} - {data?.name}</h1>
                </Col>
                <Col>
                    <h3 style={{color:clr}}>Estimated Value: {formatCurrency(estimatedValue)} </h3>
                </Col>
            </Row>
            <Row>
            <Col>
            <p>Last Week Hours: {formatNumber(data?.last_week_hours)}</p>
            <p>Last Week Quantity: {formatNumber(data?.last_week_quantity)}</p>
            <p>Last Week Production Rate: {formatNumber(data?.last_week_quantity/data?.last_week_hours)}</p>
            </Col>
            <Col>
            <p>Budget Hours: {formatNumber(data?.budget_hours)}</p>
            <p>Budget Quantity: {formatNumber(data?.budget_quantity)}</p>
            <p>Budget Production Rate: {formatNumber(data?.budget_quantity/data?.budget_hours)}</p>
            </Col>
            </Row>
        </Container>
    )
}

export default CodeReport;