import React, {useState} from 'react'

export default function LiveValidation(){
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function onChange(e){
    const val = e.target.value
    setEmail(val)
    if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(val)) setError('Invalid email format')
    else setError('')
  }

  return (
    <div>
      <h2>Live Form Validation</h2>
      <input className="form-control mb-2" value={email} onChange={onChange} placeholder="Type email..." />
      {error ? <div className="text-danger">{error}</div> : <div className="text-success">Looks good</div>}
    </div>
  )
}
