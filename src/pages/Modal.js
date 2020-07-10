import React from 'react'
import './style.css'

import Cadastro from './Professores/Cadastro/Cadastro'

const Modal = ({modal, setModal}) => {

    const closeModal = () => {
        setModal({"status" : "desativado", "component" : null})
    }

    // Se a modal estiver ativada, renderiza o componente passado pra ela.
    if(modal.status == "ativado")

        // Verifica qual componente a modal renderizará
        switch(modal.componente) {
            case "cadastro" :
                return <div className="container-modal"><Cadastro closeModal={closeModal}/></div>
        }

    else
        return null

}

export default Modal