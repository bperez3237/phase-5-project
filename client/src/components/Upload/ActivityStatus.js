import { Container } from "react-bootstrap";
import useFetch from '../../hooks/useFetch'
import { formatNumber, formatCurrency } from '../../services/Format/FormatNumber'


function ActivitiesStatus() {
    const {data} = useFetch('/activity_status')

    return(
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <h2>Work Week Hours: {formatNumber(data?.all_hours)}</h2>
            <h2>Work Week Cost: {formatCurrency(data?.all_costs)}</h2>
            <h3>Activities:</h3>
        </Container>)
}

export default ActivitiesStatus;