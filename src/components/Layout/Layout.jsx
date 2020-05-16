import React from "react"
import { StateProvider } from "../../store"
import "./Layout.scss"

const Layout = ({ children }) => {
  return <StateProvider>
  <main>{children}</main>
  </StateProvider>
}

export default Layout
