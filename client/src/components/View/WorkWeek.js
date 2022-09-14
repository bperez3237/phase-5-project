import {Card} from 'react-bootstrap'
import {formatCurrency} from '../../services/Format/FormatNumber'

function WorkWeek({workWeek}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>

            <Card.Title>Week: {workWeek?.end_date}</Card.Title>
            <Card.Text>Total Hours: {(workWeek?.total_hours)}</Card.Text>
            <Card.Text>Total Cost: {formatCurrency(workWeek?.total_cost)}</Card.Text>
            <Card.Text>Value Earned: {formatCurrency(workWeek?.estimated_value)}</Card.Text>
        </Card>
    )
}

export default WorkWeek;