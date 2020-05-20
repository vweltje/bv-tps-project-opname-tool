import React from "react"
import { StateProvider } from "../../store"
import "../../scss/base.scss"

const Layout = ({ children }) => {
  return (
    <StateProvider>
      <main>{children}</main>
    </StateProvider>
  )
}

export default Layout
