import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'

const Layout = () => {
  return (
    <>
        <main>
            <Header />
            <Outlet />
        </main>
        <CartTab/>
    </>
  )
}

export default Layout