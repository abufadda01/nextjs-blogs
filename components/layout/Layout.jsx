import React, { Fragment } from 'react'
import MainNavigation from './MainNavigation'


const Layout = ({children}) => {
    // children props will be the rendered page on the screen
  return (
    <Fragment>
        <MainNavigation/>
        {children}
    </Fragment>
  )
}

export default Layout