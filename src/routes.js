import React,{Component} from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom'
import Login from './components/login/LoginWeb'
import StepsLogInSignUp from './components/cadastro/StepsLogInSignUp'
import StepOne from './components/cadastro/stepsCadastro/stepOne'
import StepTwo from './components/cadastro/stepsCadastro/stepTwo'
import StepThree from './components/cadastro/stepsCadastro/stepThree'
import StepFour from './components/cadastro/stepsCadastro/stepFour'

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
            <Route path='/login' component={Login} />
            <Route path='/StepsLogInSignUp' component={StepsLogInSignUp} />
            <Route path='/step1' component={StepOne} />
            <Route path='/step2' component={StepTwo} />
            <Route path='/step3' component={StepThree} />
            <Route path='/step4' component={StepFour} />
        </Switch>
    </Router>
    
)

export default Routes