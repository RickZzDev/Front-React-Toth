import React, { useEffect, useState } from 'react'
import functionClaro from './images/function-claro.png'
import functionEscuro from './images/function-escuro.png'
import settingsClaro from './images/settings-claro.png'
import settingsEscuro from './images/settings-escuro.png'
import '../style.css'
import { data } from 'jquery'

const Navbar = () => {

    const [itemSelecionado, setSelecionado] = useState()
    const [itensMenu, setItens] = useState({
        "1" : functionEscuro,
        "2" : settingsEscuro
    })

    const selecionarItem = (event) => {
        const itemMenu = event.target
        const dataId = itemMenu.dataset.id

        if(itemSelecionado != null){
            itemSelecionado.classList.remove("selecionado")
        }
            
        itemMenu.classList.add("selecionado")
        setSelecionado(itemMenu)

        switch(dataId) {
            case "1":
                setItens({"1" : functionClaro, "2" : settingsEscuro})
                break;
            case "2":
                setItens({"2" : settingsClaro, "1" : functionEscuro})
                break;
        }
    }

    return(
        <nav class="nav d-flex flex-column align-items-center justify-content-center">
            <ul>
                <li data-id="1" onClick={(event) => selecionarItem(event)}>
                    <img src={itensMenu[1]}/>
                </li>
                <li data-id="2" onClick={(event) => selecionarItem(event)}>
                    <img src={itensMenu[2]}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar