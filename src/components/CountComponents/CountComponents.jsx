import { useState, useEffect} from "react"
import axios from "axios"

const CountComponents = () => {

  

    const [count, setCount]= useState(0)
  return (
    <>{count}</>
  )
}

export default CountComponents