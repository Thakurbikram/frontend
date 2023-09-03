import React, { useState } from 'react'

export const StateManagement = () => {
    let Count = 2;

    const [likes, setlikes] = useState(0)

  return (
    <div className='container'>
        <h1 className='text-center'>State Management</h1>
        <hr/>

        <button className='btn btn-primary' onClick={() => {Count++; console.log(Count); }}>Add Count</button>

        <h1>{Count}</h1>

        <button className='btn btn-success mt-4' onClick={ () => { setlikes(likes+1) } }>{likes}Likes</button>
        

    </div>
  )
}
