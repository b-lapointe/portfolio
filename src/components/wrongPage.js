import React from 'react'

import * as errorStyles from './wrongPage.module.scss'
import nothing from './nothing.gif'

const Error = () => {
    return (
        <div className={errorStyles.color}>
            <div className={errorStyles.error}>
                <div className={errorStyles.gifGroup}>
                    <h1 className={errorStyles.four}>4 0 4</h1>
                    <img className={errorStyles.gif} src={nothing} alt="You didn't see anything. GIF"></img>
                </div>
                <p className={errorStyles.text}>Uh oh! Unfortunately this page does not exist. Let's take you back to one that does!</p>
                <div className={errorStyles.buttons}>
                    <a href="/" className={errorStyles.option1}>Take me back</a> 
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className={errorStyles.option2}>Take me to a better developper</a>
                </div>
            </div>
        </div>
    )
}

export default Error
