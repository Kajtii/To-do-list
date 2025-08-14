const Button = ({type,onClick}) => {
  return (
    <button className={"ToDo__button ToDo__button--"+type} onClick={onClick}></button>
  )
}

export default Button