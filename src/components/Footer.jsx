import React from 'react'

const Footer = ({children}) => {
  return (
    <footer className='footer'>
        <p className='footer__text'>{children}</p>
    </footer>
  )
}

export default Footer