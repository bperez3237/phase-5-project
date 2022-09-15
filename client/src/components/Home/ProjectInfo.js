import useFetch from "../../hooks/useFetch";
import React from "react";
import {Card} from 'react-bootstrap'
import {formatCurrency} from '../../services/Format/FormatNumber'


function ProjectInfo() {
    const {data} = useFetch('/project_summary')

    return(
        <Card className='m-3'>
            <Card.Header>
                <Card.Title>Project Summary:</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>Total Budgeted Hours: {(data.project_budget_hours)}</Card.Text>
                <Card.Text>Total Budgeted Cost: {formatCurrency(data.project_budget_hours*108)}</Card.Text>
                <Card.Text>Hours to Date: {data.total_hours}</Card.Text>
                <Card.Text>Cost to Date: {formatCurrency(data.total_cost)}</Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ProjectInfo;