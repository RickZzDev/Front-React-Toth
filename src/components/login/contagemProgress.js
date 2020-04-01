import React,{Component} from 'react'
import './LoginWeb.css'


function ContagemProgress(props){ 
    var step1 = props.step1
    var step2 = props.step2
    var step3 = props.step3

    return(
        <div className="row d-flex justify-content-between">
            <div className="col-1 transition-5">
                <div className={ step1  + " transition-5 rounded-circle text-center"} >1</div>
            </div>
            <div className="col-1">
                <div className={ step2  + " transition-5 rounded-circle text-center"} >2</div>
            </div>
            <div className="col-1">
                <div className={ step3  + " transition-5 rounded-circle text-center"} >3</div>
            </div>
        </div>
    )
}

export default ContagemProgress