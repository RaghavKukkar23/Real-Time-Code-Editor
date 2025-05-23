import React, { use } from 'react'
import Avatar from "react-avatar";

function Client({username,key}) {
  return (
    <div className='client'>
        <Avatar name={username} size={50} round="14px"/>
        <span className='userName'>{username}</span>
    </div>
  )
}

export default Client;