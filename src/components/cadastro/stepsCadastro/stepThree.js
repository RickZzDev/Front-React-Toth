import React, {Component} from 'react'
import Inputs from '../../inputs'
import '../../login/LoginWeb.css'

    function StepThree({mudaStatus, guardaDados}){
        return(
            <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                mudaStatus('four')
                }}>
                <div className="container animAparecer">
                    <div className="row">
                        <Inputs name="email" placeholder="email" type="text" guardaDados={guardaDados} />
                    </div>
                    <div className="row">
                        <Inputs name="login" placeholder="login" type="text" guardaDados={guardaDados}  />
                    </div>
                    <div className="row">
                        <Inputs name="senha" placeholder="senha" type="password" guardaDados={guardaDados}  />
                    </div>
                    <div className="row">
                        <Inputs name="confirm-senha" placeholder="confirm-senha" type="password" guardaDados={guardaDados}  />
                    </div>
                </div>
            </form>
        )
    }
    
 

export default StepThree