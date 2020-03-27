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
            status:'LogIn',
            visibility:'invisible',
            progressCount:25
        }
    }

    animacao = async () =>{
        var element =await this.componenteLogin.current
        element.fadeOut()
    }   

    mudaStatus = (params,numero) => {
        this.setState({status:params,visibility:'visible'})
        this.aumentaProgress(numero)
    }

    aumentaProgress = (numero) =>{
        this.setState({progressCount:25*numero})
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
                                <HolderMessage aumentaProgress={this.aumentaProgress} mudaStatus={this.mudaStatus} status={this.state.status}/>
                                <div className={'progress mt-3 ' + this.state.visibility}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progressCount+ '%'}}></div>
                                </div>
                            </div>
                            <div className="col-lg-5 bg-light p-5" >
                                <StepsLogInSignUp aumentaProgress={this.aumentaProgress} mudaStatus={this.mudaStatus} status={this.state.status}/>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login