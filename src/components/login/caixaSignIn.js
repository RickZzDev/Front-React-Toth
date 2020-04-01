import React,{Component} from 'react'
import Botao from '../botao'
import Input from '../inputs'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import { doLogin } from '../../services/loginService'


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


    guardaDados(login,senha){

    }


    tryLogin = async (event) => {
        event.preventDefault()
        console.log(event)
        console.log(this.state.dadosLogin)
        const response = await doLogin(this.state.dadosLogin);
        const jsonResponse = await response.json();
        
        console.log(jsonResponse.mensagem)
        console.log(jsonResponse)

        if(response.status === 200){
            alert("Logado com sucesso!")
        }
        else if(response.status === 404)
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
            },statusBotao:'visible transition-5',errorMessage:jsonResponse.mensagem
        
        })

        else if(response.status === 400)
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
            },statusBotao:'visible transition-5',errorMessage:jsonResponse.mensagem})

    }
    
    render(){
         return(
            <div className= "" >
                <div className="row mt-2 mb-1">
                    <h3 className="text-primary">Sign In</h3>
                </div>
                <form name="frmformulario" onSubmit={this.tryLogin}>
                    <div className="row">
                        <div className="col-12">
                            <div className={this.state.statusBotao + " alert alert-danger pt-1"} role="alert">
                                {this.state.errorMessage}
                            </div>
                                <Input placeholder="login"/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <Input placeholder="senha"/>
                        </div>
                    </div>
                    <div className="row ">
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