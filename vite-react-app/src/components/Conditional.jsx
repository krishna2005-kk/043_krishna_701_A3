import React, {useState} from 'react'
export default function Conditional(){
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      <h2>Conditional Rendering</h2>
      <button className="btn btn-primary mb-2" onClick={()=>setLoggedIn(l=>!l)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
      {loggedIn ? <p>Welcome back, user!</p> : <p>Please login to see private content.</p>}
    </div>
  )
}
