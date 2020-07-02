import React, { useEffect, useState } from 'react'
import functionClaro from './images/function-claro.png'
import functionEscuro from './images/function-escuro.png'
import settingsClaro from './images/settings-claro.png'
import settingsEscuro from './images/settings-escuro.png'
import '../style.css'

const Navbar = () => {

    const [itemSelecionado, setSelecionado] = useState()
    const [itensMenu, setItens] = useState({
        "1" : functionEscuro,
        "2" : settingsClaro
    })

    const selecionarItem = (event) => {
        const itemMenu = event.target

        console.log(itensMenu.dataset.id)
    }

    return(
        <nav class="nav d-flex flex-column align-items-center justify-content-center">
            <ul>
                <li onClick={(event) => selecionarItem(event)}>
                    <img src={itensMenu[1]}/>
                </li>
                <li onClick={(event) => selecionarItem(event)}>
                    <img src={itensMenu[2]}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar