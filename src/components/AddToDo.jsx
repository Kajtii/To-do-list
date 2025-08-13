import React from 'react'

const AddToDo = ({onClick}) => {
  return (
    <div className="AddToDo">
        <label htmlFor="" className='AddToDo__inputText'>Text: </label>
        <input type="text" className="AddToDo__input" placeholder='Enter here...'/>
        <button className='AddToDo__button' onClick={onClick}>Add</button>
    </div>
  )
}

export default AddToDo