import {Card} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'

function Activity({activity}) {

    return(
        <Card className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Card.Body>
                <Card.Title>Description: {activity?.description} - Hours: {formatNumber(activity?.total_hours)}</Card.Title>
                <Card.Text>{activity?.cost_code?.code} - {activity?.cost_code?.name}</Card.Text>
                <Card.Text>Cost: {formatCurrency(activity?.total_cost)}</Card.Text>
                <Card.Text>Work Week: {activity?.work_week?.end_date} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Activity;