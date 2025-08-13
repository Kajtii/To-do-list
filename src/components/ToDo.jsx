
const ToDo = ({id,text}) => {
  return (
    <div className='ToDo'>
        <h3 className='ToDo__id'>{id}</h3>
        <p className='ToDo__title'>{text}</p>
    </div>
  )
}

export default ToDo