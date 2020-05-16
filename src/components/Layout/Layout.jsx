import React from "react"
import { StateProvider } from "../../store"
import "../../scss/base.scss"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <StateProvider>
      <main className="Layout">{children}</main>
    </StateProvider>
  )
}

export default Layout
