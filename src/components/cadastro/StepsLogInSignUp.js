import React,{Component} from 'react'
import Botao from '../botao'
import StepOne from './stepsCadastro/stepOne'
import StepTwo from './stepsCadastro/stepTwo'
import StepThree from './stepsCadastro/stepThree'
import LogIn from '../login/caixaSignIn'



function StepsLogInSignUp(props){
    const status = props.status
    const mudaStatus = props.mudaStatus
    
    var json = {
        "nome":'',
        "cnpj":'',
        'cep':'',
        'logradouro':'',
        'numero':'',
        'bairro':'',
        'cidade':'',
        'uf':'',
        'email':'',
        'login':'',
        'senha':''
    }

    function guardaDadosCadastro(event){
        const {name,value} = event.target
        json[{name}] = value
        console.log(json[{name}])
    }



    if(status == 'LogIn'){
        return <LogIn />
    }if(status == 'two'){
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-4">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepOne status={status} mudaStatus={mudaStatus} guardaDados={guardaDadosCadastro} />
                </div>
        )
    }if(status == 'three'){
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-2">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepTwo status={status} mudaStatus={mudaStatus} guardaDados={guardaDadosCadastro} />
                </div>
        )
    } if(status == 'four') {
        return (
                <div className="animAparecer">
                    <div className="row mt-2 mb-4">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepThree status={status} mudaStatus={mudaStatus} guardaDados={guardaDadosCadastro} />
                </div>
        )
    }
}
      
        
    


export default StepsLogInSignUp