import React from "react"
import { Helmet } from "react-helmet"
import { StateProvider } from "../../store"
import "../../scss/base.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="nl-NL" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <StateProvider>
        <main>{children}</main>
      </StateProvider>
    </>
  )
}

export default Layout
