import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

class StepTwo extends Component{

    constructor(){
        super()

        this.state = {}
    }


    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <Input label="CEP" />
                    </div>
                    <div className="row">
                        <div className="col-10 pl-0">
                            <Input label="Logradouro" />
                        </div>
                        <div className="col-2 pr-0">
                            <Input label="Nº" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 pl-0">
                            <Input label="Bairro" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 pl-0">
                            <Input label="Cidade" />
                        </div>
                        <div className="col-2 pl-0">
                            <Input label="UF" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo