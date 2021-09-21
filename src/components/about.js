import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import * as layoutStyles from './layout.module.scss'
import * as aboutStyles from './about.module.scss'
import AboutMe from './aboutMe'
import profile from '../assets/profile.jpg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript2 from '../assets/javascript2.png'
import angular from '../assets/angular.png'
import react from '../assets/react.png'
import wordpress from '../assets/wordpress.png'
import gatsby from '../assets/gatsby.png'
import adobeXD from '../assets/adobeXD.png'
import adobeIll from '../assets/adobeIllustrator.png'    
import sass from '../assets/sass.png'                        

const About = () => {
    return (
        <div id="about">
            <div className={layoutStyles.titleBox}>
                <h1 className={layoutStyles.title}>About</h1>
            </div>
            <div className={aboutStyles.about}>
                <img className={aboutStyles.profile} src={profile} alt={"Hi, I'm Brittany LaPointe a software developper!"}/>
                <div className={aboutStyles.text}>
                    <AboutMe/>
                    <button onClick={() => scrollTo('#contact')} className={layoutStyles.button}>Contact Me</button>
                </div>
            </div>
            <div className={aboutStyles.skills}>
                <div className={aboutStyles.imgRow}>
                    <img className={aboutStyles.skillIcon} src={html} alt={"HTML icon"} title="HTML"/>
                    <img className={aboutStyles.skillIcon} src={css} alt={"CSS icon"} title="CSS"/>
                    <img className={aboutStyles.skillIcon} src={javascript2} alt={"JavaScript icon"} title="JavaScript"/>
                    <img className={aboutStyles.skillIcon} src={react} alt={"React icon"} title="React"/>
                    <img className={aboutStyles.skillIcon} src={angular} alt={"Angular icon"} title="Angular"/>
                </div>
                <div className={aboutStyles.imgRow}>
                    <img className={aboutStyles.skillIcon} src={sass} alt={"SASS icon"} title="SASS"/>
                    <img className={aboutStyles.skillIcon} src={wordpress} alt={"Wordpress icon"} title="Wordpress"/>
                    <img className={aboutStyles.skillIcon} src={gatsby} alt={"Gatsby icon"} title="Gatsby"/>
                    <img className={aboutStyles.skillIcon} src={adobeIll} alt={"Adobe Illustrator icon"} title="Adobe Illustrator"/>
                    <img className={aboutStyles.skillIcon} src={adobeXD} alt={"Adobe XD icon"} title="Adobe XD"/>
                </div>
            </div>
        </div>
    )

}

export default About 