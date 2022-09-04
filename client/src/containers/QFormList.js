import QuantityForm from '../components/QuantityForm'
import { useState, useEffect } from 'react'
// import {Button, Form} from 'react-bootstrap'
import useFetch from '../hooks/useFetch'

function QFormList({workWeekId}) {

    // const {data, loading, error} = useFetch(`/report/${workWeekId}`)
    const {data, loading, error} = useFetch(`/work_weeks/${workWeekId}`)


    const costCodeElems = loading ? <h1>loading...</h1> : data.cost_codes?.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeek={data}/>)

    

    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList