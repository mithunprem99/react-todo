import React from 'react'

export const TodoItems = (props) => {
    return (
        <div className='todo-item'>
            <input type='checkbox' name='checkbox' onChange={() => props.completed(props.id)} />
           <p  className='ml-1'> {props.item}</p>
        </div>
    )
}
