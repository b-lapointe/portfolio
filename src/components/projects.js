import React from 'react'
//import { Link } from 'gatsby'

import * as layoutStyles from './layout.module.scss'
import * as projectsStyles from './projects.module.scss'

//import * as heroStyles from './hero.module.scss'
import memeGenPage2 from './memeGenPage2.jpeg'
import jokePage from './jokePage.png'
import formPage from './formPage.png'
import todoPage from './todoPage.png'
import contactPage from './contactPage.png'
import schoolPage from './schoolPage.png'


const Projects = () => {
    return (
        <div id="projects">
            <div className={layoutStyles.titleBox}>
                <h1 className={layoutStyles.title}>Projects</h1>
            </div>
            <div className={projectsStyles.projects}>
                <div className={projectsStyles.row}>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={memeGenPage2} alt={"Meme Generator App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>Meme Generator App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/memeGen' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={formPage} alt={"Forms App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>Forms App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/forms' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={contactPage} alt={"Contacts App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>Contact Card App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/contactCard' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={projectsStyles.row}>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={todoPage} alt={"To-do App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>To-Do App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/todo' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={jokePage} alt={"Joke App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>Joke App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/joke' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.projectBox}>
                        <img className={projectsStyles.img} src={schoolPage} alt={"Product App Page"}/>
                        <div className={projectsStyles.overlay}>
                            <h2 className={projectsStyles.appName}>Product App</h2>
                            <div className={projectsStyles.btns}>
                                <a className={layoutStyles.button} href='/product' target="_blank">Try It</a>
                                <button className={layoutStyles.button}>Code It</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Projects