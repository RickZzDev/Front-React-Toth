import React,{Component} from 'react'
import Botao from '../botao'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'

class Login extends Component{
    
    render(){
         return(
             <div className="height-100 opacidade pt-5 ">
                <div className="container bg-light div_login">
                    <div className="row divComponentLogin">
                        <div className="col-lg-4 bg-transparent p-5">
                            <div className="row mt-2">
                                <h1 className="mx-auto text-primary">Bem Vindo<p className="text-warning"><strong>Toth</strong></p></h1>
                            </div>
                            <form>
                                <div className="row mt-3">
                                    <div className="form-group text-left  col-12">
                                        <label className="ml-2">Email:</label>
                                        <input type="text" className="form-control rounded-pill"/>
                                    </div>
                                </div>
                                <div className="row  mt-3">
                                    <div className="form-group text-left col-12">
                                        <label className="ml-2">Senha:</label>
                                        <input type="text" className="form-control rounded-pill"/>
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