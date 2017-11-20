import React from 'react'
import { Link } from 'react-router-dom'

function Layout (props) {
  return (
    <div>
      <nav className='breadcrumb'>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul> 
      </nav>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
