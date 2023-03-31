import React from 'react'

const ApiMethod = React.createContext({
  api: "--Select--",
  accountId: "",
  customerId: "",
  changeMethod: () => {},
  calcelMethod: () => {},
  accountIdMethod: () => {},
  custIdMethod:() => {}
})

export default ApiMethod