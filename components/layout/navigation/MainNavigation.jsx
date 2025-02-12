import React from 'react'
import Logo from '../logo/Logo'
import Link from 'next/link'
import clasess from "./main-navigation.module.css"


const MainNavigation = () => {
  return (
    <header className={clasess.header}>

        <Link href={"/"}>
          <Logo/>
        </Link>
        
        <nav>

            <ul>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </nav>

    </header>
  )
}

export default MainNavigation