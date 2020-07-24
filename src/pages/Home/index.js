import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './style.css'

import Professores from '../Professores/Professores'
import Turmas from '../Turmas/Turmas'
import Alunos from '../Alunos/Alunos'
import Modal from '../Modal'

const Index = () => {

    const [alerta, setAlert] = useState({'status' : 'd-none', 'msg' : ''})

    const [listaProfessores, setProfessores] = useState([])
    
    const [telaSelecionada, setTelaSelecionada] = useState({
        "menu" : "1",
        "submenu" : "3"
    })

    const [modal, setModal] = useState({
        "status" : "desativado",
        "componente" : "",
        "dados" : ''
    })

    const switchContent = (telaSelecionada) => {
        switch(telaSelecionada.menu) {
            case "1": 
                switch(telaSelecionada.submenu) {
                    case "1":
                        return <Professores setModal={setModal} alerta={alerta} listaProfessores={listaProfessores} setProfessores={setProfessores}/>
                    case "2":
                        return <Turmas />
                    case "3":
                        return <Alunos />
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
            <Modal modal={modal} professores={listaProfessores} setProfessores={setProfessores} setModal={setModal} setAlert={setAlert} />
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