import React from "react";
import Logo from '../../assets/logo.png'
import Moon from '../../assets/moon.png'
import './index.css'

export default function Header() {
    return(
        <div className="header-strip">
            <div className='header-cont'>
                <img src={Logo} alt='Logo M' />
                <button>
                    <img className="btnimg" src={Moon} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}