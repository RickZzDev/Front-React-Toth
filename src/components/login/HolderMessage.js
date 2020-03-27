import React,{Component} from 'react'
import './LoginWeb.css'
import MessageStepOne from './messageStepOne'
import MessageStepTwo from './messageStepTwo'
import MessageStepThree from './messageStepThree'

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
    }
    
  
            
    
  
}

export default HolderMessage