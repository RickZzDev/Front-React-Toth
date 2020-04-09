import React,{Component} from 'react'
import Botao from '../../botao'
import Input from '../../inputs'
import ErrorMessage from '../../errorMessage'
   
    function StepTwo({mudaStatus,guardaDados,mostraJson,value,buscaCep,valid}){
        if(valid == 'input-toth-invalid'){
            visibility = 'visible'
        }else{
            var visibility = 'invisible d-none'
            
        }
        return (
            <div>
                <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                if(valid == 'input-toth'){
                    mudaStatus('four', 2.6)
                }
                }}>
                    <div className="container  p-2 pr-4 pl-4 pt-1 pb-5  animAparecer">
                        <div className="row">
                            <ErrorMessage message="Cep inválido" status={visibility}/>
                            <div className="col-10 pl-0">
                                <Input valid={valid} placeholder="cep" buscaCep={buscaCep} value={value.cep} type="text" name="cep" guardaDados={guardaDados} endereco={true} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="logradouro" value={value.logradouro}  name="logradouro" guardaDados={guardaDados} />
                            </div>
                            <div className="col-2 pl-0">
                                <Input placeholder="numero" value={value.numero}  type="number" name="numero" guardaDados={guardaDados} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="bairro" value={value.bairro}  name="bairro" guardaDados={guardaDados} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 pl-0">
                                <Input placeholder="cidade" value={value.cidade}  name="cidade" guardaDados={guardaDados} />
                            </div>
                            <div className="col-2  pl-0">
                                <Input placeholder="estado" value={value.estado}  maxLength={2} name="estado" guardaDados={guardaDados} />
                            </div>
                        </div>
                    </div>
                    <div className="row pr-3 pl-3 mb-2" >
                        <Botao value="Próximo" mostraJson={mostraJson} color=" btn-primary rounded-pill"/>
                    </div>
                </form>
            </div>
        )
    }         

export default StepTwo