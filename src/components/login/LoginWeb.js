import React,{Component} from 'react'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import LoginSignIn from '../login/caixaSignIn'
import MessageStepOne from '../login/messageStepOne'
import StepsLogInSignUp from '../cadastro/StepsLogInSignUp'
import HolderMessage from './HolderMessage'

class Login extends Component{

    constructor(){
        super()
        this.componenteLogin = React.createRef();
        this.state = {
            status:'LogIn'
        }
    }

    animacao = async () =>{
        var element =await this.componenteLogin.current
        element.fadeOut()
    }   

    mudaStatus = (params) => {
        this.setState({status:params})
    }

    render(){
         return(
             <div className="height-100 opacidade">
                <div className="opacidade height-100 pt-5">
                    <div className="container bg-light div_login rounded animAparecer ">
                        <div className="row divComponentLogin">
                            <div className="col-lg-7 testeColor" >
                                <div className="row">
                                    <div className="col-3">
                                        <ImagemToth/>
                                    </div>
                                        <div className="col colorCinza fsTothPlataform pt-4">
                                        <strong>Toth Plataform</strong>
                                    </div>
                                </div>
                                <HolderMessage mudaStatus={this.mudaStatus} status={this.state.status}/>
                            </div>
                            <div className="col-lg-5 bg-light p-5" >
                                <StepsLogInSignUp mudaStatus={this.mudaStatus} status={this.state.status}/>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login