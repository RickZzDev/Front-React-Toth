import { render } from "@testing-library/react";
import React from 'react'
import '../style.css'

import TitleImage from '../images/bastet.png'

const tothTitle = (props) => {

    const fontSize = props.fontSize

    return(
        <p className="fontSize-tothTitle ml-2" id="textTres"  style={{position: "relative", display: "inline-block", opacity: 1}} >
            T<span><img className="tothTitle-image" src={TitleImage} /></span>TH
        </p>
    )
}

export default tothTitle;