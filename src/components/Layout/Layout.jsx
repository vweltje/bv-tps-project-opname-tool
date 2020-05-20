import React from "react"
import { StateProvider } from "../../store"
import "../../scss/base.scss"
import "./Layout.scss"

const Layout = ({ children, noMaxWidth = false }) => {
  return (
    <StateProvider>
      <main className="Layout" style={noMaxWidth ? { maxWidth: "unset" } : {}}>
        {children}
      </main>
    </StateProvider>
  )
}

export default Layout
