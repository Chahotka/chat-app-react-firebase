import React from 'react'
import '../styles/header.scss'
import SignOut from './SignOut'

function Header({auth}) {
  const {photoURL} = auth.currentUser

  
  return (
    <header className='header'>
      <div className="header__container">
        <div className='header__user-image'>
          <img src={photoURL} alt="" />
        </div>
        <SignOut auth={auth}/>
      </div>
    </header>
  )
}

export default Header