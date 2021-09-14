import React, { useEffect, useState } from "react"
import './App.css'


function App() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  useEffect(() => {
    const time = setTimeout(() => { setArray([2, 1, 3, 4, 5, 6, 7, 8, 9]) }, 5000)
    return () => { clearInterval(time) }
  }, [])

  return (

    <div className="container">
      {array.map(el => <div className={`div${el}`} key={el}>{el}</div>)}
    </div>


  )
}

export default App
