import React, { useState } from "react";
import Logo from '../../assets/logo.png'
import Moon from '../../assets/moon.png'
import './index.css'

export default function Header() {

    const[cor, setCor] = useState(false)

    const alteraCor = () => {
        setCor(!cor)
    }

    return(
        <div className="header-strip-dk">
            <div className='header-cont-dk'>
                <img src={Logo} alt='Logo M' />
                <button onClick={alteraCor}>
                    <img className="btnimg-dk" src={Moon} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}