import React,{Component} from 'react'
import Botao from '../../componentesUtilitarios/botao'
import Input from '../../componentesUtilitarios/inputs'
import ErrorMessage from '../../componentesUtilitarios/errorMessage'


function StepOne({status,mudaStatus,guardaDados,mostraJson,value, confereCnpj,valid}){
    if(valid == 'input-toth-invalid'){
        visibility = 'visible'
    }else{
        var visibility = 'invisible d-none'
        
    }
    return(
            <div>
                <form name="frmformulario" onSubmit={event => {
                    event.preventDefault()
                    if(valid == 'input-toth'){
                        mudaStatus('three', 1.4)
                    }else{
                        // console.log(valid)
                    }
                }}>
                    <ErrorMessage message="Cnpj invalido" status={visibility} />
                    <div className="row mt-4">
                        <div className="form-group text-left  pl-0 pr-0  col-12">
                            <Input name="nome" guardaDados={guardaDados} placeholder="nome" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="form-group text-left pl-0 pr-0 col-12">
                            <Input valid={valid}  buscaCep={confereCnpj} name="cnpj"  value={value} guardaDados={guardaDados} placeholder="cnpj" />
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