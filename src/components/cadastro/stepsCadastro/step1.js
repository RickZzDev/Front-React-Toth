import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

class Step1 extends Component{

    constructor(){
        super()

        this.state = {}
    }


    render(){
        return(
            <div className="container bg-light p-2 pr-4 pl-4 pt-5 pb-5">
                <div className="row">
                    <Input label="Nome da instituição"></Input>
                </div>
                <div className="row">
                    CNPJ
                </div>
                <div className="row">
                    <input type="text" name="login" className="form-control "/>
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

export default Step1