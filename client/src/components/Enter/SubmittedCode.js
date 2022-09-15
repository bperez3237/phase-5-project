import {Container, Button} from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'
import {formatCurrency} from '../../services/Format/FormatNumber'

function SubmittedCode({setSubmittedStatus, workWeek, costCode}) {
    const {data} = useFetch(`/work_weeks/${workWeek.id}/cost_codes/${costCode?.id}`)

    const clr = data?.estimated_value >= 0 ? 'green' : 'red'

    return(
        <Container className='m-3' style={{border:'1px',borderStyle:'solid'}}>
            <h2>{data?.code} is submitted. </h2>
            <h3> Hours: {data?.last_week_hours} Units: {data?.last_week_quantity} {data?.unit_of_measure}</h3>
            <h3 style={{color:clr}}>Estimated Money Earned last week: {formatCurrency(data?.estimated_value)}</h3>
            <Button onClick={()=>setSubmittedStatus(false)} className='justify-content-end' value={data?.code}>Edit</Button>
        </Container>)
}

export default SubmittedCode;