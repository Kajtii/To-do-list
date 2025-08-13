
const ToDo = ({id,text}) => {
  return (
    <div className='ToDo'>
        <p className='ToDo__id'>{id}</p>
        <p className='ToDo__title'>{text}</p>
    </div>
  )
}

export default ToDo