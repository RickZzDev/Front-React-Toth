import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'


function StepOne({status,mudaStatus,guardaDados,mostraJson}){
    return(
            <div>
                <form name="frmformulario" onSubmit={event => {
                    event.preventDefault()
                    mudaStatus('three', 1.4)
                }}>
                    <div className="row mt-4">
                        <div className="form-group text-left  pl-0 pr-0  col-12">
                            <Input name="nome" guardaDados={guardaDados} placeholder="nome" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="form-group text-left pl-0 pr-0 col-12">
                            <Input name="cnpj" type="number" guardaDados={guardaDados} placeholder="cnpj" />
                        </div>
                    </div>
                    <div className="row pr-3 pl-3 mb-2" >
                        <Botao value="Próximo" mostraJson={mostraJson} color=" btn-primary rounded-pill"/>
                    </div>
                </form>
            </div>    
        )

}

        
    


export default StepOne