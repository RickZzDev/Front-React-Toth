import React,{Component} from 'react'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import LoginSignIn from '../login/caixaSignIn'
import MessageStepOne from '../login/messageStepOne'

class Login extends Component{

    constructor(){
        super()
        this.componenteLogin = React.createRef();
    
    }

    animacao = async () =>{
        var element =await this.componenteLogin.current
        element.fadeOut()
    }   

    render(){
         return(
             <div className="height-100 opacidade">
                <div className="opacidade height-100 pt-5 ">
                    <div className="container bg-light div_login rounded animAparecer ">
                        <div className="row divComponentLogin">
                            <div className="col-lg-7 bg-primary" >
                                <div className="row">
                                    <div className="col-3">
                                        <ImagemToth/>
                                    </div>
                                        <div className="col colorCinza fsTothPlataform pt-4">
                                        <strong>Toth Plataform</strong>
                                    </div>
                                </div>
                                <MessageStepOne />
                                <input type="button" value="aa" onClick={this.animacao}></input>
                            </div>
                            
                            <div className="col-lg-5 bg-transparent p-5" >
                                <LoginSignIn ref={this.componenteLogin}/>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login