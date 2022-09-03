import QuantityForm from '../components/QuantityForm'
import { useState, useEffect } from 'react'
// import {Button, Form} from 'react-bootstrap'

function QFormList({workWeekId}) {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch(`/report/${workWeekId}`)
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[workWeekId])

    const costCodeElems = costCodes.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeekId={workWeekId}/>)


    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList