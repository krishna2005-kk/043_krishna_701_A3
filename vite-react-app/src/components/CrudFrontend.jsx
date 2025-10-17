import React, {useState, useEffect} from 'react'

// Note: This is a frontend stub for CRUD operations. It expects an Express API at /api/employees
export default function CrudFrontend(){
  const [employees, setEmployees] = useState([])
  const [form, setForm] = useState({name:'', salary:''})
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{ fetchList() },[])

  function fetchList(){
    fetch('/api/employees').then(r=>r.json()).then(data=>setEmployees(data)).catch(()=>{
      // fallback: sample data if API not available
      setEmployees([{_id:'1', name:'Sample Employee', salary:5000}])
    })
  }

  function submit(e){
    e.preventDefault()
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? '/api/employees/' + editingId : '/api/employees'
    fetch(url, {
      method, headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
    }).then(()=>{ setForm({name:'', salary:''}); setEditingId(null); fetchList() }).catch(()=> fetchList())
  }

  function remove(id){
    fetch('/api/employees/' + id, {method:'DELETE'}).then(()=>fetchList()).catch(()=>fetchList())
  }

  function edit(emp){
    setEditingId(emp._id); setForm({name:emp.name, salary:emp.salary})
  }

  return (
    <div>
      <h2>Frontend for CRUD (Express API)</h2>
      <form onSubmit={submit} className="mb-3">
        <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="form-control mb-2" placeholder="Salary" value={form.salary} onChange={e=>setForm({...form, salary:e.target.value})} />
        <button className="btn btn-primary" type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <table className="table">
        <thead><tr><th>Name</th><th>Salary</th><th>Actions</th></tr></thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={()=>edit(emp)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={()=>remove(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
