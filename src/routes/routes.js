import React,{Component} from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom'
import Botao from '../components/botao'
import Login from '../components/login/LoginWeb'
import Cadastro from '../components/cadastro/Cadastro'
import Step1 from '../components/cadastro/stepsCadastro/step1'
import Step2 from '../components/cadastro/stepsCadastro/step2'
import Step3 from '../components/cadastro/stepsCadastro/step3'
import Step4 from '../components/cadastro/stepsCadastro/step4'

const NotFound = () =>{
    return(
        <div>
            <h1>Página não encontrada</h1>
        </div>
    )
}

const Routes  = () =>(
    <Router>
        <Switch>
            <Route path='/' component={Login} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/step1' component={Step1} />
            <Route path='/step2' component={Step2} />
            <Route path='/step3' component={Step3} />
            <Route path='/step4' component={Step4} />
        </Switch>
    </Router>
    
)

export default Routes