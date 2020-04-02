import React,{Component} from 'react'
import './LoginWeb.css'
import MessageStepOne from './messageStepOne'
import MessageStepTwo from './messageStepTwo'
import MessageStepThree from './messageStepThree'
import MessageStepFour from './messageStepFour'

function HolderMessage(props){
    const status = props.status
    const mudaStatus = props.mudaStatus
    const aumentaProgress = props.aumentaProgress

    if(status == 'LogIn'){
        return <MessageStepOne aumentaProgress={aumentaProgress}  mudaStatus={mudaStatus}/>    
    }if(status == 'two'){
        return <MessageStepTwo/>
        
    }if(status == 'three'){
        return <MessageStepThree />
    }if(status == 'four')
        return <MessageStepFour />
  
            
    
  
}

export default HolderMessage