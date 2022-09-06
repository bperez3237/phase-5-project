import useFetch from "../hooks/useFetch";
import {Card} from 'react-bootstrap'

function ProjectInfo() {
    const {data, loading} = useFetch('/project_summary')

    return(
        <Card>
            <Card.Header>
                <Card.Title>Project Summary:</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>Total Budgeted Hours: {data.project_budget_hours}</Card.Text>
                <Card.Text>Total Budgeted Cost: {data.project_budget_hours*108}</Card.Text>
                <Card.Text>Hours to Date: {data.total_hours}</Card.Text>
                <Card.Text>Cost to Date: {Math.round(data.total_cost*100)/100}</Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ProjectInfo;