import React from "react";
import Logo from '../../assets/logo.png'
import Moon from '../../assets/moon.png'
import './index.css'

export default function Header() {
    return(
        <div className="header-strip-dk">
            <div className='header-cont-dk'>
                <img src={Logo} alt='Logo M' />
                <button>
                    <img className="btnimg-dk" src={Moon} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}