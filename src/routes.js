import React,{Component} from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect, BrowserRouter} from 'react-router-dom'
import Login from './components/login/LoginWeb'
import EscolhaEnsino from './pages/EscolhaEnsino/index'
import StepsLogInSignUp from './components/cadastro/StepsLogInSignUp'
import StepOne from './components/cadastro/stepsCadastro/stepOne'
import StepTwo from './components/cadastro/stepsCadastro/stepTwo'
import StepThree from './components/cadastro/stepsCadastro/stepThree'
import StepFour from './components/cadastro/stepsCadastro/stepFour'
import { isLogged, getToken } from './services/escola/loginService'
import request from './services/basicRequest'
import Home from './pages/Home/index'

const NotFound = () =>{
    return(
        <div>
            <h1>Página não encontrada</h1>
        </div>
    )
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} 
            render={(props) => {
                if(isLogged()){
                    request.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
                    return <div><Component {...props} /></div>
                }
                else
                    return <Redirect to={"/login"} />    
            }} 
            />

}

const Routes = () => (
    <BrowserRouter>
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/escolha-ensino' component={EscolhaEnsino} />
                <PrivateRoute path='/home' component={Home} />
            </Switch>
        </Router>
    </BrowserRouter>
)

export default Routes