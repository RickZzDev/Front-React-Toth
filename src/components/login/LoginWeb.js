import React,{Component} from 'react'
import './LoginWeb.css'
import ImagemToth from '../imagemToth'
import LoginSignIn from '../login/caixaSignIn'
import MessageStepOne from '../login/messageStepOne'
import StepsLogInSignUp from '../cadastro/StepsLogInSignUp'
import HolderMessage from './HolderMessage'
import ContagemProgress from './contagemProgress'
import doCadastro from '../../services/cadastroService'
import {cnpjMask,cepMask} from '../../validations/masks'
import {verificaCnpj} from '../../services/loginService'
import tothLoading from './images/TOTH.png'
import okayLoading from './images/okay.png';

class Login extends Component{

    constructor(){
        super()
        this.componenteLogin = React.createRef();
        this.state = {
            valid:'',
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
            erroEmail:'invisible d-none',
            erroSenha:'invisible d-none',
            boxSize: ' col-lg-7 ',
            fix: '',
            zindex: '',
            invisibleItems: '',
            display: '',
            showLoading: '',
            aumentar: '',
            circleProgress: '',
            rotateFront: '',
            rotateConfirm: '',
            circleAnimation: '',
            displayFlex: '',
            frontAnimation: '',
            backAnimation: '',
            stepsFadeOut: '',
            moveLoading: '',
            displayVisible: '',
            displayVisibleFlex: '',
            visibleItens: '',
            reporSteps: '',
            dadosRegistro:{
                "nome":'',
                "cnpj": '',
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
    
    confereLogin = async () =>{
        // alert('a')
    }

    guardaDadosCadastro = (event,endereco)=>{
        const {name,value} = event.target
        if(name == 'cnpj'){
           var retorno = cnpjMask(value)
           this.setState({dadosRegistro:{...this.state.dadosRegistro,[name]:retorno}})
        }else if(name == 'confirm-senha'){
            if(this.state.dadosRegistro.senha == value){
                this.setState({valid:'input-toth'})    
            }else{
                this.setState({valid:'input-toth-invalid'})
            }
        }
        else if(name == 'email'){
            this.setState({dadosRegistro:{...this.state.dadosRegistro,[name]:value}}, ()=>{
                const emailInserido = this.state.dadosRegistro.email.split('@')[0]

                if(emailInserido.length >= 1 &&  this.state.dadosRegistro.email.length <=225){
                    this.setState({erroEmail:'invisible d-none'})  
                }else{
                    this.setState({erroEmail:'visible'})
                }
            })

       
        }
        else if(name == 'senha'){
            this.setState({dadosRegistro:{...this.state.dadosRegistro,[name]:value}}, ()=>{
                if(this.state.dadosRegistro.senha.length >= 5 &&  this.state.dadosRegistro.email.length <=225){
                    this.setState({erroSenha:'invisible d-none'})  
                }else{
                    this.setState({erroSenha:'visible'})
                }
            })
         
        }
        else{
            this.setState({dadosRegistro:{...this.state.dadosRegistro,[name]:value}})
        }
        
    }

    buscaCep = async () =>{

        var retorno = await fetch(`https://viacep.com.br/ws/${this.state.dadosRegistro.endereco.cep}/json/`)
        var cep = await retorno.json()
        if(cep.erro){
            this.setState({valid:'input-toth-invalid'})
            console.log('invalido')
        }else{
            this.setState({dadosRegistro:{...this.state.dadosRegistro, endereco:{...this.state.dadosRegistro.endereco,
                logradouro : cep.logradouro,
                bairro : cep.bairro,
                cidade: cep.localidade,
                estado:cep.uf}}})
            this.setState({valid:'input-toth'})    
        }
    }

    mostraJson = () =>{
        console.log(this.state.dadosRegistro)
    }

    guardaEndereco = async (event) =>{
       
        const {name, value} = event.target
        if(name == 'cep'){
            var retorno = cepMask(value)
            this.setState({dadosRegistro:{...this.state.dadosRegistro, endereco: {...this.state.dadosRegistro.endereco,[name]:retorno}}})
        }else{
            this.setState({dadosRegistro:{...this.state.dadosRegistro, endereco: {...this.state.dadosRegistro.endereco,[name]:value}}})
            console.log(this.state.dadosRegistro)
        }

    }

    cadastrarEscola = async () => {
        const resposta = await doCadastro(this.state.dadosRegistro)
        if(resposta.status === 201)
            return true
        else
            return false
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


    aumentaProgress = async (numero) =>{
        this.setState({progressCount:25*numero})
    }


    confereCnpj = async () =>{
        if(this.state.dadosRegistro.cnpj != ''){
            var retorno = await verificaCnpj({cnpj:this.state.dadosRegistro.cnpj})
            if(retorno.status == 400){
                this.setState({valid:'input-toth-invalid'})
                var message = await retorno.json()
                console.log(message)
            }else{
                this.setState({valid:'input-toth'})
            }
        }
    }

    iniciarAnimacaoLogin = () => {
        this.setState({progressCount: 100, step4: 'bg-warning'})
        setTimeout(this.boxAnimation, 1050)
    }

    boxAnimation = () => {
        this.setState({boxSize: ' col-lg-12 ', fix: ' fix ', zindex: ' z-index ', invisibleItems: ' invisible-items '})
        setTimeout(() => {this.setState({stepsFadeOut : ' retirarSteps' })}, 1200)

        setTimeout(() => {this.setState({display: ' display ', showLoading: ' display-block '})}, 1300)
        setTimeout(() => {this.setState({aumentar: ' progress-maior '})}, 1700)
        setTimeout(() => {this.setState({circleAnimation: ' circle-animation '})}, 2100)
        setTimeout(() => {this.setState({displayFlex: ' display-flex '})}, 2200)
        setTimeout(() => {this.setState({frontAnimation: ' front-animation ', backAnimation: ' back-animation '})}, 2351)
        setTimeout(() => {this.setState({boxSize: ' col-lg-7 ', visibleItens: ' visible-itens ', moveLoading: ' move-loading ', status: 'LogIn', stepsFadeOut: ' '})}, 5000)
        setTimeout(() => {this.setState({displayVisible: ' display-visible ', displayVisibleFlex: ' display-visible-flex ', reporSteps: ' repor-steps '})}, 5300)
    }

    render(){
         return(
             <div className="height-100 opacidade">
                <div className="opacidade height-100 pt-5">
                    <div className="container bg-light div_login rounded animAparecer ">
                        <div className="row divComponentLogin">
                            <div className={this.state.boxSize + this.state.zindex + "testeColor transition-5"} >
                                <div className={"row" + this.state.invisibleItems + this.state.display + this.state.displayVisibleFlex + this.state.visibleItens}>
                                    <div className="col-3">
                                        <ImagemToth/>
                                    </div>
                                    <div className="col colorCinza fsTothPlataform pt-4">
                                        <strong>Toth Plataform</strong>
                                    </div>
                                </div>
                                <div className={this.state.invisibleItems + this.state.display + this.state.displayVisible + this.state.visibleItens}>
                                    <HolderMessage aumentaProgress={this.aumentaProgress} mudaStatus={this.mudaStatus} status={this.state.status}/>
                                </div>
                                <div className={ "container mt-5 "  + this.state.visibility + this.state.invisibleItems + this.state.display}>
                                    <ContagemProgress step1={this.state.step1} step2={this.state.step2} step3={this.state.step3} step4={this.state.step4}/>
                                </div>
                                <div className={'progress mt-3 ' + this.state.visibility + this.state.invisibleItems + this.state.display}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progressCount+ '%'}}></div>
                                </div>
                            </div>
                            <div className={this.state.fix + "col-lg-5 bg-light p-5 " + this.state.stepsFadeOut + this.state.reporSteps} >
                                <StepsLogInSignUp iniciarAnimacaoLogin={this.iniciarAnimacaoLogin} confereLogin={this.confereLogin} erroSenha={this.state.erroSenha} erroEmail={this.state.erroEmail} valid={this.state.valid} confereCnpj={this.confereCnpj} value={this.state.dadosRegistro} buscaCep={this.buscaCep} mostraJson={this.mostraJson} guardaEndereco={this.guardaEndereco} guardaDados={this.guardaDadosCadastro} cadastrarEscola={this.cadastrarEscola} mudaStatus={this.mudaStatus} status={this.state.status}/>
                            </div>    
                            <div className={"container-loading" + this.state.showLoading + this.state.aumentar + this.state.moveLoading}>
                                <div className="card-loading">
                                    <svg className={"progress-bar-loading" + this.state.displayFlex}>
                                        <circle cy="70" cx="70" r="65" className={"progress-bar-loading-circle" + this.state.circleAnimation}>

                                        </circle>
                                    </svg>
                                    <div className="radius-toth">
                                        <div className={"front-circle" + this.state.frontAnimation}>
                                            <img className="toth-progressImage" src={tothLoading}/>
                                        </div>
                                        <div className={"back-circle"  + this.state.backAnimation}>
                                            <img className="toth-confirmImage" src={okayLoading}/>
                                        </div>
                                    </div>
                                </div>
                            </div>              
                        </div>
                    </div>
                </div>
            </div>    
         )
    }
}

export default Login