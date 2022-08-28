
import React from 'react'

function CodeReport({code}) {

    return(
        <div style={{border:'1px', borderStyle:'solid'}}>
            <h1>{code.code} - {code.name}</h1>
            <h3>Budgted Hours: {code.budget_hours} - Current Hours: {code.current_hours}</h3>
            <h3>Budgeted Quantity: {code.budget_quantity} - Current Quantity: {code.current_quantity}</h3>
        </div>
    )
}

export default CodeReport;