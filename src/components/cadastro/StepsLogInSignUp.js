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
        return (
                <div className="animAparecer">
                    <div className="row mt-2">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepOne status={status} mudaStatus={mudaStatus} />
                </div>
        )
    }if(status == 'three'){
        return (
                <div className="animAparecer">
                    <div className="row mt-2">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepTwo status={status} mudaStatus={mudaStatus} />
                </div>
        )
    } if(status == 'four') {
        return (
                <div className="animAparecer">
                    <div className="row mt-2">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <StepThree status={status} mudaStatus={mudaStatus} />
                </div>
        )
    }
}
      
        
    


export default StepsLogInSignUp