import useFetch from '../../hooks/useFetch'
import {formatCurrency} from '../../services/Format/FormatNumber'

function SubmittedCode({setSubmittedStatus, workWeek, costCode}) {
    const {data} = useFetch(`/work_weeks/${workWeek.id}/cost_codes/${costCode?.id}`)

    const color = data?.estimated_value >= 0 ? 'green' : 'red'

    return(
        <div className=''>
            <h2 className='submitted-message'>Units are submitted. </h2>
            <h3> Hours: {data?.last_week_hours} Units: {data?.last_week_quantity} {data?.unit_of_measure}</h3>
            <h3 style={{color:color}}>Estimated Money Earned last week: {formatCurrency(data?.estimated_value)}</h3>
        </div>)
}

export default SubmittedCode;