import React,{Component} from 'react'
import Botao from '../botao'

class Login extends Component{
    
    render(){
         return(
             <div className="container bg-light mt-5">
                <div className="row">
                    <div className="col-lg-4 bg-transparent p-5">
                        <div className="row mt-2">
                            <h1 className="mx-auto text-primary">Bem Vindo<p className="text-warning"><strong>Toth</strong></p></h1>
                        </div>
                        <form>
                            <div className="row mt-3">
                                <div className="form-group text-left">
                                    <label className="ml-2">Email:</label>
                                    <input type="text" className="form-control rounded-pill"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group text-left">
                                    <label className="ml-2">Senha:</label>
                                    <input type="text" className="form-control rounded-pill"/>
                                </div>
                            </div>
                            <div className="row">
                                <Botao value="Testando" color=" btn-primary rounded-pill"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-8 bg-primary">2</div>
                </div>
             </div>
         )
    }
}

export default Login