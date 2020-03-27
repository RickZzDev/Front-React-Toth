import React, {Component} from 'react'
import Inputs from '../../inputs'
import '../../login/LoginWeb.css'

    function StepThree(){
        return(
            <div className="container animAparecer">
                <div className="row">
                    <Inputs name="email" label="Email:" type="text" />
                </div>
                <div className="row">
                    <Inputs name="login" label="Login:" type="text" />
                </div>
                <div className="row">
                    <Inputs name="senha" label="Senha:" type="password" />
                </div>
                <div className="row">
                    <Inputs name="confirm-senha" label="Confirmar Senha:" type="password" />
                </div>
            </div>
        )
    }
    
 

export default StepThree