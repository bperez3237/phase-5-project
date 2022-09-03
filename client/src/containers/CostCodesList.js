import React from 'react'
import {useState, useEffect} from 'react'
import CostCode from '../components/CostCode'
import {Container} from 'react-bootstrap'

function CostCodesList() {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=> {
        fetch(`/cost_codes`)
            .then(r=>r.json())
            .then((data)=>setCostCodes(data))
    },[])
    
    const codeElems = costCodes.map((costCode)=><CostCode key={costCode.id} costCode={costCode} />)

    return(
        <Container style={{border:'1px', borderStyle:'solid'}}>
            {codeElems}
        </Container>
    )
}
export default CostCodesList;