import React from 'react'
import './style.css'

import Cadastro from './Professores/Cadastro/Cadastro'

import ExcluirProfessor from './Professores/ExcluirProfessor/ExcluirProfessor'

const Modal = ({modal, setModal, setAlert, professores, setProfessores}) => {

    const closeModal = () => {
        setModal({"status" : "desativado", "component" : null, "dados" : ''})
    }

    // Se a modal estiver ativada, renderiza o componente passado pra ela.
    if(modal.status == "ativado")

        // Verifica qual componente a modal renderizará
        switch(modal.componente) {
            case "cadastro" :
                return <div className="container-modal"><Cadastro closeModal={closeModal} setAlert={setAlert} professoresListados={professores} setProfessores={setProfessores} /></div>
            case "excluirProfessor" : 
            return <div className="container-modal"><ExcluirProfessor idProfessor={modal.dados} closeModal={closeModal} setAlert={setAlert} professores={professores} setProfessores={setProfessores}/></div>
        }

    else
        return null

}

export default Modal