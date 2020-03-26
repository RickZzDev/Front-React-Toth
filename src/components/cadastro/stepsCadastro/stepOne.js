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
            <div className="container">
                <div className="row">
                    <Input label="Nome da instituição" name="nome" placeholder="Nome da instituição" colorBorder="border-primary"/>
                </div>
                <div className="row">
                    <Input type="text" label="CNPJ" name="cnjp" placeholder="Cnpj" colorBorder="border-primary"/>
                </div>
            </div>
        )
    }
}

export default StepOne