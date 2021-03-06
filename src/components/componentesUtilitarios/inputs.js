import React, { Component } from 'react'
import '../css/style.css'



    function Inputs({type,name,placeholder,guardaDados,maxLength,value,buscaCep, valid,readonly}){
        
        return(
            <div className="col-12">
                <div className="container-toth-input">
                    <input readOnly={readonly} type={type} value={value} onBlur={buscaCep} maxLength={maxLength} onChange={guardaDados} name={name} required className={"input-toth  " + valid}/>
                    <span className={"placeholder-" + placeholder}></span>
                </div>
            </div>
        )
    }
    

export default Inputs