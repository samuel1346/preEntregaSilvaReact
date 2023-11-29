import { useState } from "react"

const CountComponents = () => {
    const [count, setCount]= useState(0)
    const handleAddCount = ()=>{
        setCount(count++)
    }
    const handleRemoveCount= ()=>{
        setCount(count--)
    }
  return (
    <>{count}</>
  )
}

export default CountComponents