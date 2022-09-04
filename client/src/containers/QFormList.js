import QuantityForm from '../components/QuantityForm'
import { useState, useEffect } from 'react'
// import {Button, Form} from 'react-bootstrap'
import useFetch from '../hooks/useFetch'

function QFormList({workWeekId}) {

    const {data, loading, error} = useFetch(`/report/${workWeekId}`)

    const costCodeElems = loading ? <h1>loading...</h1> : data.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeekId={workWeekId}/>)

    

    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList