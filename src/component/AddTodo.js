import React from 'react'

export const AddTodo = () => {
  return (
    <form method='POST'>
        <input type='text' placeholder='Enter todos..' name='todo'/>
        <button>ADD</button>
    </form>
  )
}
