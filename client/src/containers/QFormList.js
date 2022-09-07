import QuantityForm from '../components/QuantityForm'
import { useState, useEffect, useContext } from 'react'
// import {Button, Form} from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import {WorkWeekContext} from '../context/WorkWeekContext'

function QFormList() {
    const {workWeek} = useContext(WorkWeekContext)

    const costCodeElems = workWeek.cost_codes?.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeek={workWeek}/>)

    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList