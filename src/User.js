import React from 'react'
import { useAuth } from './role/authContext'
import { users } from './role/data'

const User = () => {
  const {logout,userRole} = useAuth()
  const user = users.find((e) => e.id === 2);
  const userName = user ? user.FullName : null;
  
  return (
    <div>
      <h2>{`Welcome : ) ${userName}`}</h2>
      <h2>My role is {userRole}</h2>
      {/* <button onClick={logout}>LOG OUT</button> */}
      
    </div>
  )
}

export default User