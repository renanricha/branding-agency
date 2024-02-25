import React from "react";
import Logo from '../../assets/logo.png'
import FB from '../../assets/facebook.png'
import TW from '../../assets/twitter.png'
import IN from '../../assets/linkedin.png'
import GP from '../../assets/google-plus.png'

export default function Footer() {
    return(
        <div className="footer">
            <img src={Logo} alt='Logo M' />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
            <img src= {FB} />
            <img src= {TW} />
            <img src= {TW} />
            <img src= {IN} />
            <img src= {GP} />
            <p>Copyright 2022 © <span>Renan</span></p>
        </div>
    )
}