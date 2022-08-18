import React from 'react'
import {useState, useEffect} from 'react'
import CostCode from '../components/CostCode'

function CostCodesList() {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=> {
        fetch(`/cost_codes`)
        .then(r=>r.json())
        .then((data)=>setCostCodes(data))
    },[])
    
    const codeElems = costCodes.map((code)=><CostCode key={code.id} code={code} />)

    return(
        <>
        {codeElems}
        </>
    )
}
export default CostCodesList;