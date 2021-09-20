import React from 'react'

import * as layoutStyles from './layout.module.scss'
import * as contactStyles from './contact.module.scss'

const Contact = () => {
    return (
        <div id="contact">
            <div className={layoutStyles.titleBox}>
                <h1 className={layoutStyles.title}>Contact</h1>
            </div>
            <div className={contactStyles.contact}>

                    <p>Email: brittany.lapointe60@gmail.com</p>
                    <p>Phone: (506) 987-3586</p>

            </div>  
        </div>
    )
}

export default Contact