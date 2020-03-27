import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

    function StepTwo(){
        return (
            <div>
                <div className="container bg-light p-2 pr-4 pl-4 pt-5 pb-5  animAparecer">
                    <div className="row">
                        <Input label="CEP" />
                    </div>
                    <div className="row">
                        <div className="col-8 pl-0">
                            <Input label="Logradouro" />
                        </div>
                        <div className="col-4 pr-0">
                            <Input label="Nº" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 pl-0">
                            <Input label="Logradouro" />
                        </div>
                    </div>
                    <div className="row">
                        <div className=" ml-auto mt-5 col-2">
                            <Botao value="Proximo" color=" btn-primary rounded-pill"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }         

export default StepTwo