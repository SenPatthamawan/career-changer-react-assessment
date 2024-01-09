import React from 'react'
import './assets/style/index.css'

const Navbar = () => {
  return (
    <>
        <ul className="nav__list">
            <li><a href={'/'} className="nav__item">Home</a></li>
            <li><a href={'/owner'} className="nav__item">Owner</a></li>
        </ul>
        <hr></hr>
    </>
  )
}

export default Navbar