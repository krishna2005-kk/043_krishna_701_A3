import React from 'react'

export default function ExampleList(){
  const items = ['HTML','CSS','JavaScript','React','Node.js']
  return (
    <div>
      <h2>List Example</h2>
      <ul>
        {items.map((it, idx) => <li key={idx}>{it}</li>)}
      </ul>
    </div>
  )
}
