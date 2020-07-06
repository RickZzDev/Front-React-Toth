import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './style.css'

const Index = () => {
    
    const [telaSelecionada, setTelaSelecionada] = useState({
        "menu" : null,
        "submenu" : null
    })

    console.log(telaSelecionada)

    return (
        <div className="container-fluid m-0 p-0 container-plataforma d-flex flex-row">
            <Navbar telaSelecionada={telaSelecionada}
                    setTelaSelecionada={setTelaSelecionada}/>
        </div>
    )
}

export default Index;