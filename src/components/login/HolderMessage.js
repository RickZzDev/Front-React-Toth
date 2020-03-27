import React,{Component} from 'react'
import './LoginWeb.css'
import MessageStepOne from './messageStepOne'
import MessageStepTwo from './messageStepTwo'

function HolderMessage(props){
    const status = props.status
    const mudaStatus = props.mudaStatus

    if(status == 'LogIn'){
        return <MessageStepOne  mudaStatus={mudaStatus}/>    
    }if(status == 'two'){
        return <MessageStepTwo/>
    }if(status == 'three'){
        return <MessageStepOne />
    }
}

export default HolderMessage