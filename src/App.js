import React, { useReducer, useEffect } from "react"
import data from "./components/data"
import { useGlobalecontext } from "./components/context"
import Navbar from "./components/Navbar"
import './App.css'


const App = () => {

  const { totale, amount, phones, increase, decrease, clearitem } = useGlobalecontext();
  return (
    <>
      <Navbar />
      {phones.map(item => {

        return item && (

          <div key={item.id}>

            <h2>{item.title}</h2>
            <h4>{item.price} $</h4>
            <h4>{item.amount}</h4>
            <img src={item.img} className="image" alt="phone-image" />

            <button onClick={() => { increase(item.id) }}>increase</button>
            <button onClick={() => { decrease(item.id) }}>decrease</button>


          </div>

        )
      })}
      {totale > 0 && <h1>{totale} $</h1>}
      <button onClick={() => { clearitem() }}>clear item</button>

    </>
  )
}

export default App
