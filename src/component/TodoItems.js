import React from 'react'

export const TodoItems = (props) => {
  return (
    <div>
        <input type='checkbox' name='checkbox' onChange={() => props.completed(props.id)}/>
        {props.item}
    </div>
  )
}
