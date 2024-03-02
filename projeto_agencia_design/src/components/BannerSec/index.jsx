import React from 'react'
import './index.css'

export default function BannerSec(props) {
    return (
      <div className={props.cor ? 'banner-sec' : "banner-sec-dk"}>
        <div className={props.cor ? 'banner-img' : 'banner-img-dk'}>
          <div className={props.cor ? 'box-banner-img' : 'box-banner-img-dk'}></div>
        </div>
        <div className={props.cor ? 'banner-text' : 'banner-text-dk'}>
            <div className={props.cor ? 'text-cont-banner' : 'text-cont-banner-dk'}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </div>
      </div>
    );
  }