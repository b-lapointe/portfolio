import React from 'react'

import * as layoutStyles from './layout.module.scss'
import * as contactStyles from './contact.module.scss'
import * as IoIcons from "react-icons/io"

const Contact = () => {
    return (
        <div id="contact" className={contactStyles.section}>
            <div className={layoutStyles.titleBox}>
                <h1 className={layoutStyles.title}>Contact</h1>
            </div>
            <div className={contactStyles.contact}>

                    <p><IoIcons.IoIosMail /> brittany.lapointe60@gmail.com</p>
                    <p><IoIcons.IoMdPerson /> (506) 987-3586</p>

            </div>  
        </div>
    )
}

export default Contact