import React,{Component} from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom'
import Botao from '../components/botao'
import Login from '../components/login/LoginWeb'
import Cadastro from '../components/cadastro/Cadastro'

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
            <Route path='/cadastro' component={Cadastro} />
        </Switch>
    </Router>
    
)

export default Routes