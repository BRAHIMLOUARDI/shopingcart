import React from "react"
const Reducer = (state, action) => {
  let temptotale = 0;
  if (action.type === "inc") {

    let newphones = state.phones.map((phone) => {
      if (phone && phone.id === action.payload) {
        temptotale += phone.price
        return { ...phone, amount: phone.amount + 1 }
      }
      return phone
    })
    return { amount: state.amount + 1, phones: newphones, totale: parseFloat((state.totale + temptotale).toFixed(2)) }
  }
  if (action.type === "dec") {

    let newphones = state.phones.map((phone) => {
      if (phone && phone.id === action.payload) {
        temptotale -= phone.price
        if (phone.amount === 1) {
          return null
        }
        return { ...phone, amount: phone.amount - 1 }

      }
      return phone
    })
    return { amount: state.amount - 1, phones: newphones, totale: parseFloat((state.totale + temptotale).toFixed(2)) }
  }
  if (action.type === "clear") {
    return { totale: 0, amount: 0, phones: [] }

  }
  if (action.type === "mount") {
    state.phones.map(phone => {
      temptotale += phone.amount * phone.price;
    })
    return { ...state, totale: temptotale }
  }
  throw new Error('no matching action type')
}
export default Reducer