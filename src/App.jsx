import React, { useCallback } from 'react'
import Home from './pages/Home'
import { useState } from 'react'
function App() {
  const [todos,settodos]=useState([])
  const [count,setcount]=useState(0)
    const addtodos=useCallback(()=>{
        settodos((pre)=>[...pre,'new todo'])
    },[])
    const addcount=()=>{
      setcount(count + 1)
    }
  return (
    <>
    <Home todos={todos} addtodos={addtodos}/>
    {count}
    <button onClick={()=>addcount()}>add</button>
    </>
  )
}

export default App
