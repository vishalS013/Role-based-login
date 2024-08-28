import React from 'react'
import { users } from './data'

const auth = () => {
    users.find((user)=>user.userName === userName && user.password === password) || null
  return (
    <div>
      
    </div>
  )
}

export default auth