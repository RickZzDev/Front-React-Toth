import React,{Component} from 'react'
import Botao from '../botao'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import { doLogin } from '../../services/loginService'

class Login extends Component{

    constructor() {
        super()

        this.state = {
            dadosLogin: {
                login: '',
                senha: ''
            },
            mensagemErro: {
                inputLogin: '',
                inputSenha: '',
            }
        }
    }

    capturarDadosCampos = (event) => {
        const { name, value } = event.target;

        this.setState({dadosLogin: {
            ...this.state.dadosLogin,
            [name] : value
        }});
    }

    tryLogin = async (event) => {
        event.preventDefault()

        const response = await doLogin(this.state.dadosLogin);
        const jsonResponse = await response.json();

        if(response.status === 200)
            alert("Logado com sucesso!")
        else if(response.status === 404)
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
                inputLogin: jsonResponse.status
            }})
        else if(response.status == 400)
            this.setState({mensagemErro: {
                ...this.state.mensagemErro,
                inputSenha: jsonResponse.status
            }})

    }
    
    render(){
         return(
             <div className="height-100 opacidade pt-5 ">
                <div className="container bg-light div_login">
                    <div className="row divComponentLogin">
                        <div className="col-lg-4 bg-transparent p-5">
                            <div className="row mt-2">
                                <h1 className="mx-auto text-primary">Bem Vindo<p className="text-warning"><strong>Toth</strong></p></h1>
                            </div>
                            <form name="frmformulario" onSubmit={this.tryLogin}>
                                <div className="row mt-3">
                                    <div className="form-group text-left  col-12">
                                    <div className="alert alert-danger fading" role="alert">
                                        {this.state.mensagemErro.inputLogin}
                                    </div>
                                        <label className="ml-2">Login:</label>
                                        <input type="text" name="login" onChange={this.capturarDadosCampos} className="form-control rounded-pill"/>
                                    </div>
                                </div>
                                <div className="row  mt-3">
                                    <div className="form-group text-left col-12">
                                    <div class="alert alert-success fade in alert-dismissible" style="margin-top:18px;">
                                        <a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>
                                        {this.state.mensagemErro.inputSenha}
                                    </div>
                                        <label className="ml-2">Senha:</label>
                                        <input type="text" name="senha" onChange={this.capturarDadosCampos} className="form-control rounded-pill"/>
                                    </div>
                                </div>
                                <div className="row pr-3 pl-3 mb-2 " >
                                    <Botao value="Login" color=" btn-warning rounded-pill"/>
                                </div>
                                <span className="text-primary">Esqueceu a senha?</span><span className="text-warning">  Clique aqui</span> 
                            </form>
                        </div>
                        <div className="col-8 bg-primary teste pr-0">
                            <div className="">
                                <ImagemToth />  
                            </div>
                            <div className="">
                                <span className="nomeToth">TOTH</span>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login