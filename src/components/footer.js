import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import * as layoutStyles from './layout.module.scss'
import * as footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={layoutStyles.footer}>
            <p className={footerStyles.text}>
                © Totally copyrighted <span role="img" aria-label="eye roll emoji">🙄</span> 
                | Created by {data.site.siteMetadata.author} 
                | 2021 
                | <a className={footerStyles.button} href='/contactCard' target="_blank"> Check Out My Code </a>
                | <button onClick={() => scrollTo('#home')} className={footerStyles.button}>Back to the Top</button>
            </p>
        </footer>
    )
}

export default Footer