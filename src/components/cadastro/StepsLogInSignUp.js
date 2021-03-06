import React,{Component} from 'react'
import Botao from '../componentesUtilitarios/botao'
import StepOne from './stepsCadastro/stepOne'
import StepTwo from './stepsCadastro/stepTwo'
import StepThree from './stepsCadastro/stepThree'
import LogIn from '../login/caixaSignIn'



function StepsLogInSignUp({confereLogin,erroSenha,erroEmail,valid,confereCnpj,buscaCep,status,mudaStatus,guardaDados,mostraJson,guardaEndereco,cadastrarEscola,value, iniciarAnimacaoLogin, history}){
 
    const guardaDadosCadastro = guardaDados


    if(status == 'LogIn'){
        return (<LogIn history={history} />)
    }if(status == 'two'){
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-1">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepOne valid={valid} confereCnpj={confereCnpj} value={value.cnpj} status={status} mostraJson={mostraJson} mudaStatus={mudaStatus} guardaDados={guardaDadosCadastro} />
                </div>
        )
    }if(status == 'three'){
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-2">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepTwo valid={valid} buscaCep={buscaCep} value={value.endereco} status={status} mudaStatus={mudaStatus} mostraJson={mostraJson}  guardaDados={guardaEndereco} />
                </div>
        )
    } if(status == 'four') {
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-4">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepThree iniciarAnimacaoLogin={iniciarAnimacaoLogin} confereLogin={confereLogin} erroSenha={erroSenha} erroEmail={erroEmail} valid={valid} cadastrarEscola={cadastrarEscola} status={status} mostraJson={mostraJson} mudaStatus={mudaStatus} guardaDados={guardaDadosCadastro} />
                </div>
        )
    }
}
      
        
    


export default StepsLogInSignUp