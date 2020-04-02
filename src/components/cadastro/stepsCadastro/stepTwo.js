import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'

   
    function StepTwo({mudaStatus,guardaDados}){
        return (
            <div>
                <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                mudaStatus('four', 2.6)
                }}>
                    <div className="container  p-2 pr-4 pl-4 pt-1 pb-5  animAparecer">
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="cep" guardaDados={guardaDados} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="logradouro" guardaDados={guardaDados} />
                            </div>
                            <div className="col-2 pl-0">
                                <Input placeholder="numero" guardaDados={guardaDados} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="bairro" guardaDados={guardaDados} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="cidade" guardaDados={guardaDados} />
                            </div>
                            <div className="col-2  pl-0">
                                <Input placeholder="estado" guardaDados={guardaDados} />
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