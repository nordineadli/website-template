import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { pages, setSdbOpen } = useGlobalContext();
  return <nav>
    <img src={logo} alt='logo' />
    <ul className='nav-items'>
      {pages.map((page, index) => {
        return <li key={index} className='nav-item'>
          {page}
        </li>
      })}
    </ul>
    <button className='sidebar-btn' onClick={() => setSdbOpen(true)}>
      <i><FaBars /></i>
    </button>
  </nav>
}

export default Navbar
