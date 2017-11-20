import React from 'react'
import { Link } from 'react-router-dom'

function Home (){
  return (
    <div className='content column is-half is-offset-one-quarter'>
      <h1>Sitemap</h1>

      <ul>
        <li>Admin
          <ul>
            <li><Link to='/reviews'>Performance reviews</Link></li>
            <li><Link to='/employees'>Employees</Link></li>
          </ul>
        </li>
        <li>Employee
          <ul>
            <li><Link to='/feedback/1'>Submit feedback</Link></li>
          </ul>
        </li>
      </ul>
    </div>

  )
}

export default Home
