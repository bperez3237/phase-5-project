import React from 'react'

function Card({title, body}) {


  return (
    <div>
        {title ? <h1>{title}</h1> : ''}
        {body ? <p>{body}</p> : ''}
    </div>
  )
}

export default Card