import React, {useState, useEffect} from 'react'

export default function Clock(){
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const id = setInterval(()=> setTime(new Date()), 1000)
    return ()=> clearInterval(id)
  },[])

  return (
    <div>
      <h2>Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  )
}
