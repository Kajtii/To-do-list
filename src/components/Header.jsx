
const Header = ({children}) => {
  return (
    <header className='header'>
        <h1 className='header__title'>{children}</h1>
    </header>
  )
}

export default Header