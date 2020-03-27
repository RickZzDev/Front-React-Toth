import React,{Component} from 'react'
import './LoginWeb.css'

function messageStepThree(){
    return(
        <div className="animAparecer" >
            <div className="row  text-light  mt-5">
                <h1 className="mx-auto">Cadastre-se agora!</h1>
            </div>
            {/* <div className="row  text-light  mt-1">
                <h4 className="mx-auto">Seja bem vindo!</h4>
            </div> */}
            <div className="row  text-light">
                <h4 className="mx-auto">Nos Diga o nome da sua instituição.</h4>
            </div>
            <div className="row  text-light">
                <h4 className="mx-auto">E o seu CNPJ!.</h4>
            </div>
            
    </div>
        )
}



export default messageStepThree