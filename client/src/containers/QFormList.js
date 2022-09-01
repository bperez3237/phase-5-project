import QuantityForm from '../components/QuantityForm'
import { useState, useEffect } from 'react'
// import {Button, Form} from 'react-bootstrap'

function QFormList() {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch('/report')
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[])


    // const activityFormElems = activities.map((activity)=>{
    //     if (activity.approved === true) {
    //         return <QuantityForm key={activity.id} activity={activity}/>
    //     } else return null
    // })

    const costCodeElems = costCodes.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} />)


    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList