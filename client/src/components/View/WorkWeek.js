import {Card} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'

function WorkWeek({workWeek}) {

    return(
        <Card className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Card.Body>
                <Card.Title>Week: {workWeek?.end_date}</Card.Title>
                <Card.Text>Total Hours: {formatNumber(workWeek?.total_hours)}</Card.Text>
                <Card.Text>Total Cost: {formatCurrency(workWeek?.total_cost)}</Card.Text>
                <Card.Text>Value Earned: {formatCurrency(workWeek?.estimated_value)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WorkWeek;