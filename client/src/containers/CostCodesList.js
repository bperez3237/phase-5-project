import React from 'react'
import CostCode from '../components/CostCode'

function CostCodesList({codes}) {

    console.log(codes)
    const codeElems = codes.map((code)=><CostCode key={code.id} code={code} />)

    return(
        <>
        {codeElems}
        </>
    )
}
export default CostCodesList;