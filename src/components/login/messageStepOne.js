import React,{Component} from 'react'
import './LoginWeb.css'



class messageStep1 extends Component{
    
    render(){
         return(
            <div className="" >
                <div className="row  text-light  mt-5">
                    <h1 className="mx-auto">Hey There!</h1>
                </div>
                <div className="row  text-light  mt-1">
                    <h4 className="mx-auto">Welcome Back.</h4>
                </div>
                <div className="row  text-light">
                    <h4 className="mx-auto">You are just one step away to your education.</h4>
                </div>
                <div className="row mt-5">
                    <h6 className="mx-auto colorCinza">Do you have account?</h6>
                </div>
                <div className="row text-light pt-2 pb-2  mt-5">
                    <button type="button" className="btnSignUp btn btn-primary pr-5 pl-5 bg-transparent border-light mx-auto rounded-pill">Sign Up</button>
                </div>
        </div>
         )
    }
}

export default messageStep1