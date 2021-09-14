import React, { useContext, createContext, useReducer, useEffect } from "react"
import data from "./data"
import Reducer from "./Reducer"

const intiale = {
  totale: 0,
  amount: data.length,
  phones: data,

}
const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, intiale)
  const increase = (id) => {
    dispatch({ type: "inc", payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: "dec", payload: id })
  }
  const clearitem = () => {
    dispatch({ type: "clear" })
  }
  useEffect(() => {
    dispatch({ type: "mount" })
  }, [])

  return (
    <AppContext.Provider value={{ ...state, increase, decrease, clearitem }}>
      {children}
    </AppContext.Provider>
  )

}
export const useGlobalecontext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }