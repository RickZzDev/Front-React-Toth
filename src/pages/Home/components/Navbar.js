import React, { useEffect, useState } from 'react'
import SubMenu from './SubMenu'


import functionClaro from './images/function-claro.png'
import functionEscuro from './images/function-escuro.png'
import settingsClaro from './images/settings-claro.png'
import settingsEscuro from './images/settings-escuro.png'
import homeClaro from './images/home-claro.png'
import homeEscuro from './images/home-escuro.png'

import seta from './images/seta.png'
import '../style.css'

const Navbar = (props) => {

    const [itemSelecionado, setSelecionado] = useState()
    const [subItemSelecionado, setSubSelecionado] = useState()
    const [anteriormenteSelecionado, setAnteriormenteSelecionado] = useState(false)
    const [dnone, setDisplay] = useState('dnone')

    const telaSelecionada = props.telaSelecionada
    const setTelaSelecionada = props.setTelaSelecionada

    const [itensMenu, setItens] = useState({
        "1" : functionEscuro,
        "2" : homeEscuro,
        "3" : settingsEscuro
    })

    const [submenu, setSubMenu] = useState({
        "status" : "menuDesativado",
        "itemSelecionado" : "0"
    })

    const selecionarItem = (event) => {
        const itemMenu = event.target
        const dataId = itemMenu.dataset.id

        if(itemSelecionado != null){
            itemSelecionado.classList.remove("selecionado")
        }
        
        if(subItemSelecionado != null)
            subItemSelecionado.classList.remove("subSelecionado")

        if(submenu.status === "menuDesativado"){
            mostrarSubMenu(dataId)
        }
        else
            setSubMenu({"itemSelecionado" : dataId})

        itemMenu.classList.add("selecionado")
        setSelecionado(itemMenu)

        switch(dataId) {
            case "1":
                setItens({"1" : functionClaro, "2" : homeEscuro, "3" : settingsEscuro})
                break;
            case "2":
                setItens({"2" : homeClaro, "1" : functionEscuro, "3" : settingsEscuro})
                break;
            case "3":
                setItens({"3" : settingsClaro, "1" : functionEscuro, "2" : homeEscuro})
                break;
        }

        if(telaSelecionada.submenu != null) {
            if(dataId === telaSelecionada.menu) 
                setAnteriormenteSelecionado(!anteriormenteSelecionado)
        }

    }

    const esconderSubMenu = () => {
        setSubMenu({...submenu,"status" : "menuDesativado"})
        setTimeout(() => setDisplay('dnone'), 500)
    }

    const mostrarSubMenu = (dataId) => {
        setDisplay('')
        setTimeout(() => setSubMenu({"status" : "menuAtivado", "itemSelecionado" : dataId}), 100)
    }

    return(
        <>
            <nav className="nav d-flex flex-column align-items-center justify-content-center">
                <ul>
                    <li data-id="1" onClick={(event) => selecionarItem(event)}>
                        <img src={itensMenu[1]} alt="Conteúdos"/>
                    </li>
                    <li data-id="2" onClick={(event) => selecionarItem(event)}>
                        <img src={itensMenu[2]} alt="Home"/>
                    </li>
                    <li data-id="3" onClick={(event) => selecionarItem(event)}>
                        <img src={itensMenu[3]} alt="Perfil"/>
                    </li>
                </ul>
            </nav>
            <div className={`submenu ${submenu.status} ${dnone}`} id="submenu">
                <div className="linha d-flex m-0 mt-3 p-0 align-items-center justify-content-between header-menu">
                    <h2>Toth</h2>
                    <spam onClick={() => esconderSubMenu()}>
                        <img src={seta} />
                    </spam>
                </div>
                <SubMenu dnone={dnone}   
                         setDisplay={setDisplay}
                         itemSelecionado={submenu.itemSelecionado}
                         subItemSelecionado={subItemSelecionado}
                         setSubSelecionado={setSubSelecionado}
                         setTelaSelecionada={setTelaSelecionada}
                         telaSelecionada={telaSelecionada}
                         anteriormenteSelecionado={anteriormenteSelecionado}/>
            </div>
        </>
    )
}

export default Navbar
