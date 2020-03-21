import React,{Component} from 'react'
import Botao from '../botao'
<<<<<<< Updated upstream
import './LoginWeb.css'
=======
import ImagemToth from '../ImagemToth'
>>>>>>> Stashed changes

class Login extends Component{
    
    render(){
         return(
             <div className="container bg-light mt-5 div_login">
                <div className="row height-100">
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
<<<<<<< Updated upstream
                    <div className="col-lg-8 bg-primary justify-content-center p-5">
                        <div className="bg-dark mt-2">
                            s
                        </div>
                        <div className="bg-light">
                            a
                        </div>
=======
                    <div className="col-lg-8 bg-primary">
                        <ImagemToth />
>>>>>>> Stashed changes
                    </div>
                </div>
             </div>
         )
    }
}

export default Login