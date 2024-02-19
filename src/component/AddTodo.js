import React from 'react'
import { useState } from 'react'
export const AddTodo = (props) => {
    const [item, setItem] = useState("")

    const handleChange = (ev) => {
        setItem(ev.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item)
        console.log(item)
    }

    return (
        <form method='POST' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter todos..' name='todo' value={item} onChange={handleChange} />
            <button type='submit'>ADD</button>
        </form>


    )
}
