import React, {useState} from 'react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault()
    // Expecting backend endpoint POST /api/auth/login which returns {token}
    try{
      const res = await fetch('/api/auth/login', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email,password})})
      if (!res.ok) throw new Error('Login failed - backend required')
      const data = await res.json()
      localStorage.setItem('token', data.token)
      window.location.href = '/profile'
    }catch(err){
      alert('Login failed. (This frontend expects a backend at /api/auth/login)')
    }
  }

  return (
    <div style={{maxWidth:400}}>
      <h3>Employee Login (JWT)</h3>
      <form onSubmit={submit}>
        <div><input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><input className="form-control mb-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" /></div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  )
}
