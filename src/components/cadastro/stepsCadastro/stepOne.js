import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'


function StepOne({status,mudaStatus}){
    return(
            <div className= "animAparecer" >
                <div className="row mt-2">
                    <h3 className="text-primary">Sign Up</h3>
                </div>
                <form name="frmformulario" onSubmit={event => {
                    event.preventDefault()
                    mudaStatus('three')
                }}>
                    <div className="row">
                        <div className="form-group text-left  pl-0 pr-0  col-12">
                            {/* <div className={this.state.statusBotao + " alert alert-danger pt-1"} role="alert">
                                {this.state.errorMessage}
                            </div> */}
                                <Input label="Nome da instituição" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group text-left pl-0 pr-0 col-12">
                            <Input label="CNPJ"  />
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