import React, {useState, useEffect} from 'react'

export default function Leave(){
  const [leaves, setLeaves] = useState([])
  const [form, setForm] = useState({date:'', reason:''})

  useEffect(()=> fetchList(), [])

  function fetchList(){
    const token = localStorage.getItem('token')
    fetch('/api/leaves', {headers:{ 'Authorization': 'Bearer ' + token }})
      .then(r=>r.json()).then(setLeaves).catch(()=>{
        setLeaves([{_id:1, date:'2025-10-01', reason:'Sick', grant:'no'}])
      })
  }

  function submit(e){
    e.preventDefault()
    const token = localStorage.getItem('token')
    fetch('/api/leaves', {method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify(form)})
      .then(()=>{ setForm({date:'', reason:''}); fetchList() }).catch(()=>fetchList())
  }

  return (
    <div>
      <h3>Apply for Leave</h3>
      <form onSubmit={submit} style={{maxWidth:400}}>
        <input className="form-control mb-2" type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
        <input className="form-control mb-2" placeholder="Reason" value={form.reason} onChange={e=>setForm({...form, reason:e.target.value})} required />
        <button className="btn btn-success" type="submit">Apply</button>
      </form>

      <h4 className="mt-3">Your Applications</h4>
      <table className="table">
        <thead><tr><th>Date</th><th>Reason</th><th>Grant</th></tr></thead>
        <tbody>
          {leaves.map(l=> <tr key={l._id}><td>{l.date}</td><td>{l.reason}</td><td>{l.grant ?? 'no'}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}
