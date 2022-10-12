import React from 'react'
import { useState } from 'react'

function ErrorMessage({messages}) {

    console.log(messages)
    const listElements = messages.map((error, index)=>{
        if (error.error) return (<li key={`${index} ${error.error}`}>{error.error}</li>)
        else if (error.activity) return (<li key={`${index} ${error.activity}`}>{error.activity}</li>)
        else if (error.cost_code) return (<li key={`${index} ${error.cost_code}`}>{error.cost_code}</li>)
        else if (error.cost) return (<li key={`${index} ${error.cost}`}>{error.cost}</li>)
        else if (error.employee) return (<li key={`${index} ${error.employee}`}>{error.employee}</li>)

        // else if ()
        // <li key={`${index} error`}>{error}</li>
    })

  return (
    <ul>
        {listElements}
    </ul>
  )
}

export default ErrorMessage;