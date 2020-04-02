import React, { Component } from 'react'
import './css/style.css'



    function Inputs({type,name,placeholder,guardaDados}){
      

        return(
            <div className="col-12">
                <div className="container-toth-input">
                    <label></label>
                    <input type={type} onChange={guardaDados} name={name} required className="input-toth "/>
                    <span className={"placeholder-" + placeholder}></span>
                </div>
            </div>
        )
    }
    

export default Inputs