import React, {Component} from 'react'
import Inputs from '../../inputs'
import Botao from '../../botao'

class Step3 extends Component{

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

                </div>
                <div className="row">

                </div>
                <div className="row">

                </div>
            </div>
        )
    }
}

export default Step3