import React, {useEffect, useState} from 'react'

export default function Profile(){
  const [profile, setProfile] = useState(null)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    fetch('/api/employees/profile', {headers: { 'Authorization': 'Bearer ' + token }})
      .then(r=>r.json()).then(data=>setProfile(data)).catch(()=>{
        // Mock fallback
        setProfile({name:'Sample Employee', empid:'EMP001', email:'sample@example.com'})
      })
  },[])

  if(!profile) return <div>Loading...</div>
  return (
    <div>
      <h3>Employee Profile</h3>
      <p><b>EmpID:</b> {profile.empid}</p>
      <p><b>Name:</b> {profile.name}</p>
      <p><b>Email:</b> {profile.email}</p>
    </div>
  )
}
