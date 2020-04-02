import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

    function StepTwo({guardaDadosCadastro}){
    function StepTwo({mudaStatus}){
        return (
            <div>
                <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                mudaStatus('four', 3)
                }}>
                    <div className="container bg-light p-2 pr-4 pl-4 pt-5 pb-5  animAparecer">
                        <div className="row">
                            <Input placeholder="cep" />
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="logradouro" />
                            </div>
                            <div className="col-2 pr-0">
                                <Input placeholder="numero" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 pl-0">
                                <Input placeholder="bairro" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="cidade" />
                            </div>
                            <div className="col-2 pl-0">
                                <Input placeholder="estado" />
                            </div>
                        </div>
                    </div>
                    <div className="row pr-3 pl-3 mb-2" >
                        <Botao value="Próximo" color=" btn-primary rounded-pill"/>
                    </div>
                </form>
            </div>
        )
    }         

export default StepTwo