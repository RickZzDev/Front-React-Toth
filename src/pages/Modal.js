import React from 'react'
import './style.css'

const Modal = ({modal}) => {

    // Se a modal estiver ativada, renderiza o componente passado pra ela.
    if(modal.status == "ativado")
        return <div className="container-modal">{modal.component}</div>
    else
        return null

}

export default Modal