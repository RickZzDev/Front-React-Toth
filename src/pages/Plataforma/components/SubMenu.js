import React, { useState, useEffect } from 'react'
import '../style.css'

import livroBranco from './images/livro-branco.png'
import livroPreto from './images/livro-preto.png'
import chapeuBranco from './images/chapeu-branco.png'
import chapeuPreto from './images/chapeu-preto.png'
import salaPreto from './images/sala-preto.png'
import salaBranco from './images/sala-branco.png'

const SubMenu = (props) => {

    const itemSelecionado = props.itemSelecionado
    const subItemSelecionado = props.subItemSelecionado
    const setSubSelecionado = props.setSubSelecionado
    const setTelaSelecionada = props.setTelaSelecionada
    const telaSelecionada = props.telaSelecionada
    const anteriormenteSelecionado = props.anteriormenteSelecionado

    useEffect(() => {
        setItens({
            "1": {
                "1" : chapeuPreto,
                "2" : livroPreto, 
                "3" : salaPreto
            },
            "2": {
                "1" : chapeuPreto, 
                "2" : salaPreto,
                "3" : livroPreto
            },
            "3": {
                "1" : livroPreto, 
                "2" : salaPreto ,
                "3" : chapeuPreto
            }
        })
    }, [itemSelecionado])

    const selecionarSubItem = (event) => {
        
        const dataId = event.target.id
        const itemSelected = document.getElementById(dataId)

        if(subItemSelecionado != null)
            subItemSelecionado.classList.remove("subSelecionado")

        itemSelected.classList.add("subSelecionado")
        setSubSelecionado(itemSelected)

        setTelaSelecionada({"menu" : itemSelecionado, "submenu" : dataId})

        alterarIcone(dataId)

    }

    const alterarIcone = (dataId) => {

        switch(itemSelecionado) {
            case "1" :
                switch(dataId) {
                    case "1":
                        setItens({...itens, "1" : {"1" : chapeuBranco, "2" : livroPreto, "3" : salaPreto} })
                        break;
                    case "2":
                        setItens({...itens, "1" : {"1" : chapeuPreto, "2" : livroBranco, "3" : salaPreto} })
                        break;
                    case "3":
                        setItens({...itens, "1" : {"1" : chapeuPreto, "2" : livroPreto, "3" : salaBranco} })
                        break;
                }
            case "2":
                switch(dataId) {
                    case "4":
                        setItens({...itens, "2" : {"1" : chapeuBranco, "2" : salaPreto, "3" : livroPreto}})
                        break;
                    case "5":
                        setItens({...itens, "2" : {"1" : chapeuPreto, "2" : salaBranco, "3" : livroPreto} })
                        break;
                    case "6":
                        setItens({...itens, "2" : {"1" : chapeuPreto, "2" : salaPreto, "3" : livroBranco} })
                        break;
                }
            case "3":
                switch(dataId) {
                    case "7":
                        setItens({...itens, "3" : {"1" : livroBranco, "2" : salaPreto, "3" : chapeuPreto} })
                        break;
                    case "8":
                        setItens({...itens, "3" : {"1" : livroPreto, "2" : salaBranco, "3" : chapeuPreto} })
                        break;
                    case "9":
                        setItens({...itens, "3" : {"1" : livroPreto, "2" : salaPreto, "3" : chapeuBranco} })
                        break;
                }
                    
        }
    }

    const [itens, setItens] = useState({
        "1": {
            "1" : chapeuPreto,
            "2" : livroPreto, 
            "3" : salaPreto
        },
        "2": {
            "1" : chapeuPreto, 
            "2" : salaPreto,
            "3" : livroPreto
        },
        "3": {
            "1" : livroPreto, 
            "2" : salaPreto ,
            "3" : chapeuPreto
        }
    })

    useEffect(() => {
        if(subItemSelecionado != null){
            document.getElementById(subItemSelecionado.id).classList.add("subSelecionado")
            alterarIcone(subItemSelecionado.id)
        }
        
    }, [anteriormenteSelecionado])

    switch(itemSelecionado) {
        case "0":
            return null
        case "1":
            return(<>
                        <div className="optionsSubmenu d-flex align-items-center justify-content-center">
                            <ul>
                                <li  id="1" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img  src={itens[1][1]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Professores</p>
                                    </div>
                                </li>
                                <li  id="2" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[1][2]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Matérias</p>
                                    </div>
                                </li>
                                <li  id="3" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[1][3]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Salas</p>
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                    </>)
        case "2":
            return(<>
                        <div className="optionsSubmenu d-flex align-items-center justify-content-center">
                            <ul>
                                <li  id="4" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[2][1]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Professores</p>
                                    </div>
                                </li>
                                <li  id="5" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img  src={itens[2][2]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Salas</p>
                                    </div>
                                </li>
                                <li  id="6" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[2][3]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Matérias</p>
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                    </>)
        case "3":
            return(<>
                        <div className="optionsSubmenu d-flex align-items-center justify-content-center">
                            <ul>
                                <li  id="7" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img  src={itens[3][1]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Matérias</p>
                                    </div>
                                </li>
                                <li  id="8" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[3][2]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Salas</p>
                                    </div>
                                </li>
                                <li  id="9" onClick={(event) => selecionarSubItem(event)}>
                                    <div className="imgItem">
                                        <img src={itens[3][3]}/>
                                    </div>
                                    <div className="nameItem">
                                        <p>Professores</p>
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                    </>)
        
    }

}

export default SubMenu                

