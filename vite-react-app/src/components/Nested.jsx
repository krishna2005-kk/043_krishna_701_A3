import React from 'react'

function Card({title, children}){
  return (
    <div className="card p-3 mb-2">
      <h5>{title}</h5>
      <div>{children}</div>
    </div>
  )
}

export default function Nested(){
  return (
    <div>
      <h2>Nested Components & Children</h2>
      <Card title="Profile Card">
        <p>Name: Krishna</p>
        <p>Course: MSc.It</p>
      </Card>

      <Card title="Notes">
        <ul>
          <li>Nested components show composition</li>
          <li>Children prop used for containment</li>
        </ul>
      </Card>
    </div>
  )
}
