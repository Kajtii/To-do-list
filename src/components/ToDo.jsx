import Button from "./Button"
const ToDo = ({id,text,buttons}) => {
     

  return (
    
    <div className='ToDo'>
        <p className='ToDo__id'>{id}</p>
        <p className='ToDo__title'>{text}</p>
        {buttons}
    </div>
  )
}

export default ToDo