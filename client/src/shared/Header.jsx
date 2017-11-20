import React from 'react'

// todo: fetch data

function Header ({user, onChangeUser}) {
  return (
    <div className='level'>
      <h1 className='is-size-h2'>Welcome back {user.name}!</h1>
      <div>
        <span>View as: </span>
        <div className='select is-small '>
          <select value={user.id} onChange={onChangeUser}>
            <option value="1">John</option>
            <option value="2">Paul</option>
            <option value="3">George</option>
            <option value="4">Ringo</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header
