import React, {Component} from 'react'
import Inputs from '../../inputs'
import '../../login/LoginWeb.css'
import Botao from '../../botao'
import ErrorMessage from '../../errorMessage'

    function StepThree({confereLogin,erroSenha,erroEmail,mudaStatus, guardaDados,mostraJson, cadastrarEscola,valid, iniciarAnimacaoLogin}){
        if(valid == 'input-toth-invalid'){
            visibility = 'visible'
        }else{
            var visibility = 'invisible d-none'
        }
        return(
            <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                if(valid == 'input-toth'){
                    const tentativaCadastro = cadastrarEscola();
                    
                    if(tentativaCadastro)
                        iniciarAnimacaoLogin()
                }
                }}>
                <div className="container animAparecer">
                    <div className="row">
                        <Inputs name="email" type="email" placeholder="email" type="text" guardaDados={guardaDados} />
                    </div>
                     <div className={erroEmail + ' text-danger'}>
                        Email invalido
                    </div>
                    <div className="row">
                        <Inputs  name="login" buscaCep={confereLogin} placeholder="login" type="text" guardaDados={guardaDados}  />
                    </div>
                    <div className="row">
                        <Inputs name="senha" placeholder="senha" type="password" guardaDados={guardaDados}  />
                    </div>
                    <div className={erroSenha + ' text-danger'}>
                        Senha deve ter mais que 5 caracteres
                    </div>
                    <div className="row">
                        <Inputs name="confirm-senha" placeholder="confirm-senha" type="password" guardaDados={guardaDados}  />
                    </div>
                    <div className={visibility + ' text-warning'}>
                        Senhas não coincidem
                    </div>
                </div>
                <div className="row pr-3 mt-5 pl-3 mb-2" >
                    <Botao value="Finalizar" mostraJson={mostraJson} color=" btn-primary rounded-pill"/>
                </div>
            </form>
        )
    }
    
 

export default StepThree