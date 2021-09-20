import React from "react"

import * as contactCardStyles from "./card.module.scss"
import phoneIcon from './phone.png'
import emailIcon from './email.png'

function ContactCard(props) {
    console.log(props)
    return (
        <div className={contactCardStyles.card}>
            <img className={contactCardStyles.profilePic} src={props.contact.imgUrl} alt={"Cat"}/>
            <h3>{props.contact.name}</h3>
            <div className={contactCardStyles.info}>
                <img className={contactCardStyles.icon} src={phoneIcon} alt={"phone"}/>
                <p>Phone: {props.contact.phone}</p>
            </div>
            <div className={contactCardStyles.info}>
                <img className={contactCardStyles.icon} src={emailIcon} alt={"email"}/>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard