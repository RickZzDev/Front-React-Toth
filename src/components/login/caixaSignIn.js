import React, {Component} from 'react'
import Botao from '../componentesUtilitarios/botao'
import Input from '../componentesUtilitarios/inputs'
import './LoginWeb.css'
import ImagemToth from '../componentesUtilitarios/imagemToth'
import doLogin from '../../services/escola/loginService'
import { Redirect } from 'react-router-dom'
import { isLogged } from '../../services/escola/loginService'
import { render } from '@testing-library/react'


class LoginSignIn extends Component{

    constructor() {
        super()

        this.state = {
            statusBotao:'invisible transition-5 h-alert',
            errorMessage:'**',
            dadosLogin: {
                login: '',
                senha: ''
            },
            mensagemErro: {
                inputLogin: '',
                inputSenha: '',
            },
            teste:null
        }
    }

    fadeOut = () =>{
        this.setState({
            fadeOut:'divMain'
        })
    }


    guardaDados = (event) => {
        const {name,value} = event.target
        this.setState({dadosLogin:{...this.state.dadosLogin,[name]:value}})
    }

    tryLogin = async (event) => {
        event.preventDefault()

        const response = await doLogin(this.state.dadosLogin);

        if(response == null)
            return this.setState({mensagemErro: {
                ...this.state.mensagemErro,
            },statusBotao:'visible transition-5',errorMessage:"Um erro ocorreu. Tente novamente"
        })

        
        console.log(response.data.escola)
        if(response.status === 200){
            if(response.data.escola.materias == null || response.data.escola.materias == [] || response.data.escola.materias.length == 0)
                this.props.history.push("/escolha-ensino")
            else
                this.props.history.push("/home")
        }

        else if(response.status == 400) {
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
            },statusBotao:'visible transition-5',errorMessage:"Login ou senha incorretos"})
        }
            
        
        else if(response.status === 403)
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
            },statusBotao:'visible transition-5',errorMessage:"Login ou senha incorretos"
        
        })

    }
    
    render(){

         return(
            <div className="" >
                <div className="row mt-2 mb-1">
                    <h3 className="text-primary">Sign In</h3>
                </div>
                <form name="frmformulario" onSubmit={this.tryLogin}>
                    <div className="row">
                        <div className="col-12 ">
                            <div className={this.state.statusBotao + " alert alert-danger pt-1"} role="alert">
                                {this.state.errorMessage}
                            </div>
                            <Input placeholder="login" name="login" guardaDados={this.guardaDados} type="text" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <Input placeholder="senha" name="senha" guardaDados={this.guardaDados} type="password"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group text-right pl-0 pr-3 col-12">
                            <span className={this.state.fadeOut + " text-primary"} >Forgot your password?</span>
                        </div>
                    </div>
                    <div className="row pr-3 pl-3 mb-2 " >
                        <Botao value="Login" color=" btn-primary rounded-pill"/>
                    </div>
                </form>
        </div>
         )
    }
}

export default LoginSignIn