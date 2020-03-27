import React,{Component} from 'react'
import Botao from '../botao'
import StepOne from './stepsCadastro/stepOne'
import StepTwo from './stepsCadastro/stepTwo'
import StepThree from './stepsCadastro/stepThree'
import LogIn from '../login/caixaSignIn'



function StepsLogInSignUp(props){
    const status = props.status
    const mudaStatus = props.mudaStatus

    if(status == 'LogIn'){
        return <LogIn />
    }if(status == 'two'){
        return <StepOne status={status} mudaStatus={mudaStatus} />
    }if(status == 'three'){
        return <StepThree status={status} mudaStatus={mudaStatus} />
    }
}
      
        
    


export default StepsLogInSignUp