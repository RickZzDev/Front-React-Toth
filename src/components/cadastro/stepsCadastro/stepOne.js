import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'


function StepOne({status,mudaStatus,guardaDadosCadastro}){
    return(
            <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                mudaStatus('three', 2)
            }}>
                <div className="row">
                    <div className="form-group text-left  pl-0 pr-0  col-12">
                            <Input name="nome" placeholder="nome" />
                    </div>
                </div>
                <form name="frmformulario" onSubmit={event => {
                    event.preventDefault()
                    mudaStatus('three', 2)
                }}>
                    <div className="row">
                        <div className="form-group text-left  pl-0 pr-0  col-12">
                            {/* <div className={this.state.statusBotao + " alert alert-danger pt-1"} role="alert">
                                {this.state.errorMessage}
                            </div> */}
                                <Input name="nome" guardaDados={guardaDadosCadastro} placeholder="nome" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group mt-4 text-left pl-0 pr-0 col-12">
                            <Input name="cnpj" guardaDados={guardaDadosCadastro} placeholder="cnpj" />
                        </div>
                    </div>
                    <div className="row pr-3 pl-3 mb-2" >
                        <Botao value="Próximo" color=" btn-primary rounded-pill"/>
                    </div>
                </form>
            </div>
        )

}

        
    


export default StepOne