import React,{component} from 'react'

function errorMessage({message,status}){
    return(
        <div className={"alert alert-danger pt-1 " + status} role="alert">
            {message}
        </div>
    )
}

export default errorMessage