import React,{Component} from 'react'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import LoginSignIn from '../login/caixaSignIn'
import MessageStepOne from '../login/messageStepOne'
import StepsLogInSignUp from '../cadastro/StepsLogInSignUp'
import HolderMessage from './HolderMessage'
import ContagemProgress from './contagemProgress'

class Login extends Component{

    constructor(){
        super()
        this.componenteLogin = React.createRef();
        this.state = {
            status:'LogIn',
            visibility:'invisible',
            progressCount:1,
            currentStep:'15',
            color:'bg-light',
            passedStep:'12',
            step1:'bg-light',
            step2:'bg-light',
            step3:'bg-light',
            step4:'bg-light',
            dadosRegistro:{
                "nome":'',
                "cnpj":'',
                'email':'',
                'login':'',
                'senha':'',
                'endereco':{
                    'cep':'',
                    'logradouro':'',
                    'numero':'',
                    'bairro':'',
                    'cidade':'',
                    'estado':'',
                }
            }
        }
    }

    animacao = async () =>{
        var element =await this.componenteLogin.current
        element.fadeOut()
    }
    

    guardaDadosCadastro = (event,endereco)=>{
        const {name,value} = event.target
        this.setState({dadosRegistro:{...this.state.dadosRegistro,[name]:value}})
        console.log(this.state.dadosRegistro)
    }

    guardaEndereco = (event) =>{
       
        const {name, value} = event.target
        this.setState({dadosRegistro:{...this.state.dadosRegistro, endereco: {...this.state.dadosRegistro.endereco,[name]:value}}})
        console.log(this.state.dadosRegistro)
    }

   mostraJson = () =>{
        console.log(this.state.dadosRegistro)
    }

    mudaStatus = (params,numero) => {
        this.setState({status:params,visibility:'visible'})
        this.aumentaProgress(numero)
        
        switch(this.state.status) {
            case "LogIn":
                this.state.step1 = 'bg-warning'
                break;
            case "two":
                this.state.step2 = 'bg-warning'
                break;
            case "three":
                this.state.step3 = 'bg-warning'
                break;
            case "four":
                this.state.step4 = 'bg-warning'
                break;    
        }

    }

    aumentaIndicador = (step) =>{
        
    }

    aumentaProgress = async (numero) =>{
        this.setState({progressCount:25*numero})
    }

    animationRegistroConcluido = () => {
        
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
                                <HolderMessage  aumentaProgress={this.aumentaProgress} mudaStatus={this.mudaStatus} status={this.state.status}/>
                                <div className={ "container mt-5 "  + this.state.visibility}>
                                    <ContagemProgress step1={this.state.step1} step2={this.state.step2} step3={this.state.step3} step4={this.state.step4}/>
                                </div>
                                <div className={'progress mt-3 ' + this.state.visibility}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progressCount+ '%'}}></div>
                                </div>
                            </div>
                            <div className="col-lg-5 bg-light p-5" >
                                <StepsLogInSignUp mostraJson={this.mostraJson} guardaEndereco={this.guardaEndereco} guardaDados={this.guardaDadosCadastro} mudaStatus={this.mudaStatus} status={this.state.status}/>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login