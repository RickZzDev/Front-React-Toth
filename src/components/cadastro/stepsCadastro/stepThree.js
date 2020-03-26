import React, {Component} from 'react'
import Inputs from '../../inputs'
import Botao from '../../botao'

class StepThree extends Component{

    constructor(){
        super()

        this.state = {}
    }


    render(){
        return(
            <div className="container">
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
}

export default StepThree