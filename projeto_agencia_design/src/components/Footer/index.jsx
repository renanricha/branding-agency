import React from "react";
import Logo from '../../assets/logo.png'
import FB from '../../assets/facebook.png'
import TW from '../../assets/twitter.png'
import IN from '../../assets/linkedin.png'
import GP from '../../assets/google-plus.png'
import './index.css'

export default function Footer(props) {
    return(
        <div className={props.cor ? "footer-dk" : "footer"}>
            <img className="img-logo" src={Logo} alt='Logo M' />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
            <div className="social">
                <img className="img-social" src= {FB} />
                <img className="img-social" src= {TW} />
                <img className="img-social" src= {TW} />
                <img className="img-social" src= {IN} />
                <img className="img-social" src= {GP} />
            </div>
            <p>Copyright 2022 © <span>Renan</span></p>
        </div>
    )
}