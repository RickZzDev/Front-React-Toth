import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './style.css'

import Professores from '../Professores/Professores'
import Modal from '../Modal'

import Cadastro from '../Professores/Cadastro/Cadastro'

const Index = () => {
    
    const [telaSelecionada, setTelaSelecionada] = useState({
        "menu" : "1",
        "submenu" : "1"
    })

    const [modal, setModal] = useState({
        "status" : "ativado",
        "component" : <Cadastro />
    })

    const switchContent = (telaSelecionada) => {
        switch(telaSelecionada.menu) {
            case "1": 
                switch(telaSelecionada.submenu) {
                    case "1":
                        return <Professores modal={modal} />
                    case "2":
                        break;
                    case "3":
                        break;
                }
                break;
            case "2": 
                switch(telaSelecionada.submenu) {
                    case "4":
                        break;
                    case "5":
                        break;
                    case "6":
                        break;
                }
                break;
            case "3": 
                switch(telaSelecionada.submenu) {
                    case "7":
                        break;
                    case "8":
                        break;
                    case "9":
                        break;
                }
                break;
        }
    }

    return (
        <>
            <Modal modal={modal} />
            <div className="container-fluid m-0 p-0 container-plataforma d-flex flex-row">
                <Navbar telaSelecionada={telaSelecionada}
                        setTelaSelecionada={setTelaSelecionada}/>
                <div className="container-content">
                    {switchContent(telaSelecionada)}
                </div>
            </div>
        </>
    )
}

export default Index;