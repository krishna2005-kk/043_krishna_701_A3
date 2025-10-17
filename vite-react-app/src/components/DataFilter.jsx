import React, {useState} from 'react'

export default function DataFilter(){
  const [q, setQ] = useState('')
  const data = [
    {id:1, name:'Alice'}, {id:2, name:'Bob'}, {id:3, name:'Charlie'},
    {id:4, name:'David'}, {id:5, name:'Eve'}
  ]

  const filtered = data.filter(d => d.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <h2>Live Data Filtering</h2>
      <input className="form-control mb-2" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name..." />
      <ul>
        {filtered.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
