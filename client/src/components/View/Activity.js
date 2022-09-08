import {Card} from 'react-bootstrap'
import {formatCurrency} from '../../services/Format/FormatNumber'

function Activity({activity}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>

            <Card.Title>Description: {activity?.description} - Hours: {activity?.total_hours}</Card.Title>
            <Card.Text>{formatCurrency(activity?.total_cost)}</Card.Text>
            <Card.Text>{activity?.cost_code?.code} - {activity?.cost_code?.name}</Card.Text>
            <Card.Text>Work Week: {activity?.work_week?.end_date} </Card.Text>
        </Card>
    )
}

export default Activity;