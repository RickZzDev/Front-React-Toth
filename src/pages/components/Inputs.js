import React from 'react'
import './style.css'

const Inputs = ({type, name, placeholder}) => {
        
    return(
        <div className="cont-input">
            <input class="edited-input" type={type} name={name} required/>
            <label>
                {placeholder}
            </label>
        </div>
    )

}

export default Inputs