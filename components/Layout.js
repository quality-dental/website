import React from "react"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className="layoutContainer">
    <NavigationBar />
    {children}
    <Footer />
  </div>
)

export default Layout
