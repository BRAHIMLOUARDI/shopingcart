import React from "react"
import { useGlobalecontext } from "./context"

const Navbar = () => {
  const { amount } = useGlobalecontext();
  return (
    <>
      {amount > 0 && <h1>{amount}</h1>}
    </>
  )
}
export default Navbar