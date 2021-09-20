import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import * as layoutStyles from './layout.module.scss'
import * as headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header id="home" className={layoutStyles.header}>
            <h1 className={headerStyles.title}>
                <Link to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1> 
            <nav>
                <ul className={headerStyles.navList}>
                    <li><button onClick={() => scrollTo('#about')} className={headerStyles.navItem}>About</button></li> 
                    <li><button onClick={() => scrollTo('#projects')} className={headerStyles.navItem}>Projects</button></li>
                    <li><button onClick={() => scrollTo('#contact')} className={headerStyles.navItem}>Contact</button></li> 
                </ul>
            </nav>
        </header>
    )
}

export default Header