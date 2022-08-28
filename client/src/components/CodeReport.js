
import React from 'react'

function CodeReport({code}) {

    function handleClick(e) {
        console.log(e.target)
        console.log(e.target.value)
    }

    return(
        <div style={{border:'1px', borderStyle:'solid'}} onClick={handleClick} value={code.id}>
            <h1>{code.code} - {code.name}</h1>
            <h3>Last Week Hours: {code.current_hours}</h3>
            <h3>Last Week Quantity: {code.current_quantity}</h3>
            <h3>Production Rate: {Math.round(100*(code.current_quantity/code.current_hours))/100}</h3>
            <h3 onClick={handleClick} value={code.id}>Activities:</h3>
        </div>
    )
}

export default CodeReport;