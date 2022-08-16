import React from 'react'

function CostCodes({codes}) {

    console.log(codes)
    const codeElems = codes.map((code)=><h1 key={code.id}>{code.code} - {code.name}</h1>)

    return(
        <>
        {codeElems}
        </>
    )
}
export default CostCodes;