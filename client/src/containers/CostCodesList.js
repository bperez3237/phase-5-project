import React from 'react'
import {useState, useEffect} from 'react'
import CostCode from '../components/CostCode'
import {Container} from 'react-bootstrap'

function CostCodesList({value}) {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=> {
        fetch(`/cost_codes`)
            .then(r=>r.json())
            .then((data)=>setCostCodes(data))
    },[])
    
    const codeElems = costCodes.filter((costCode)=>{
        if (costCode.name.includes(value) || costCode.code.includes(value)) {return true} 
        else { return false}
    }).map((costCode)=><CostCode key={costCode.id} costCode={costCode} />)

    return(
        <Container style={{border:'1px', borderStyle:'solid'}}>
            {codeElems}
        </Container>
    )
}
export default CostCodesList;