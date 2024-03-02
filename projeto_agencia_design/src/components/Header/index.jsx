import React from "react";
import Logo from '../../assets/logo.png'
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'
import './index.css'

export default function Header(props) {

    const alteraCor = () => {
        props.setCor(!props.cor)
    }

    return(
        <div className= {props.cor ? 'header-strip' : 'header-strip-dk'}>
            <div className={props.cor ? 'header-cont' : 'header-cont-dk'}>
                <img src={Logo} alt='Logo M' />
                <button onClick={alteraCor}>
                    <img className={props.cor ? 'btnimg' : 'btnimg-dk'} src={props.cor ? Moon : Sun} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}