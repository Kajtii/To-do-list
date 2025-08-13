import React from 'react'

const AddToDo = ({onClick}) => {
  return (
    <div className="AddToDo">
        <label htmlFor="" className='AddToDO__text'>Text: </label>
        <input type="text" className="AddToDo__inputText" placeholder='Enter here...'/>
        <button className='AddToDO__button' onClick={onClick}>Add</button>
    </div>
  )
}

export default AddToDo