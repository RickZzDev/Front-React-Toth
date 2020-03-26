import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

class StepOne extends Component{

    constructor(){
        super()

        this.state = {}
    }


    render(){
        return(
            <div className="col-6">
                <div className="row">
                    <Input label="Nome da instituição" />
                </div>
                <div className="row">
                    <Input label="CNPJ"/>
                </div>
                  <div className="row">
                      <div className=" ml-auto mt-5 col-2">
                        <Botao value="Proximo" color=" btn-primary rounded-pill"/>
                      </div>
                </div>
            </div>
        )
    }
}

export default StepOne