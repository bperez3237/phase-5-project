import useFetch from '../../hooks/useFetch'
import {formatCurrency} from '../../services/Format/FormatNumber'
import Loading from '../Loading'

function SubmittedCode({setSubmittedStatus, workWeek, costCode}) {
    const {data, loading} = useFetch(`/work_weeks/${workWeek.id}/cost_codes/${costCode?.id}`)

    const clr = data?.estimated_value >= 0 ? 'green' : 'red'

    return(
        <div className=''>
            {loading && <Loading />}
            <h2>Code is submitted. </h2>
            <h3> Hours: {data?.last_week_hours} Units: {data?.last_week_quantity} {data?.unit_of_measure}</h3>
            <h3 style={{color:clr}}>Estimated Money Earned last week: {formatCurrency(data?.estimated_value)}</h3>
            <button id='button' onClick={()=>setSubmittedStatus(false)} className='justify-content-end' value={data?.code}>Edit</button>
        </div>)
}

export default SubmittedCode;