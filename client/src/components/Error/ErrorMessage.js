import React from 'react'

function ErrorMessage({messages}) {

    const listElements = messages.map((error, index)=>{
      const newArray = []
      for (const message in error) {
        newArray.push(<li key={`${index} ${error[message]}`} >{error[message]}</li>)
      }
      return newArray
    })

  return (
    <ul>
        {listElements}
    </ul>
  )
}

export default ErrorMessage;