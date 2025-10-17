import React, {useState, useRef} from 'react'

export default function FormsExample(){
  const [form, setForm] = useState({name:'', email:''})
  const emailRef = useRef()

  function submit(e){
    e.preventDefault()
    alert('Submitted: ' + JSON.stringify(form))
  }

  return (
    <div>
      <h2>Forms using useState & useRef</h2>
      <form onSubmit={submit}>
        <div className="mb-2">
          <label>Name</label>
          <input className="form-control" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input ref={emailRef} className="form-control" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  )
}
