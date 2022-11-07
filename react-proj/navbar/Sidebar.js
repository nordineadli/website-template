import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { sdbopen, setSdbOpen } = useGlobalContext()
  if (sdbopen) {
    return <div className='sidebar-wrapper'>
      <button className='close-btn' onClick={() => setSdbOpen(false)}><i><FaTimes /></i></button>
      <ul className='nav-links'>
        {sublinks.map((item, index) => {
          const { page, links } = item
          return <li key={index} className='link'>
            {page}
            <ul className='sublinks'>
            {links.map((link, index) => {
              const { label, icon, url } = link
              return <li className='sublink' key={index}>
                <a href={url}>
                  <i>{icon}</i>{label}
                </a>
              </li>
            })}

            </ul>
          </li>
        })}
      </ul>
    </div>
  }
}

export default Sidebar
