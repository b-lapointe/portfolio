import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
//import { Link } from 'gatsby'

import * as layoutStyles from './layout.module.scss'
import * as heroStyles from './hero.module.scss'
import onLaptop from './onLaptop.png'

const Hero = () => {
    return (
        <div className={layoutStyles.heroColor}>
            <div className={heroStyles.hero}>
                <div className={heroStyles.intro}>
                    <h1 className={heroStyles.introText}>Hello!</h1>
                    <h1 className={heroStyles.introText}>I'm Brittany, a software developer</h1>
                    <button onClick={() => scrollTo('#contact')} className={layoutStyles.button}>Contact</button>
                </div>
                <div className={heroStyles.imageBox}>
                    <img className={heroStyles.laptop} src={onLaptop} alt={"Hi, I'm Brittany LaPointe a software developper!"}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
