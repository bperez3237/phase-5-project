import React from 'react'
import { useState } from 'react'

function ErrorMessage({messages}) {

    const listElements = messages.map((error, index)=>{
      for (const message in error) {
        return <li key={`${index} ${error[message]}`}>{error[message]}</li>
      }
    })

  return (
    <ul>
        {listElements}
    </ul>
  )
}

export default ErrorMessage;