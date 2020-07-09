import React, { useState, useEffect } from 'react'
import './style.css'

import add from './images/add.png'
import search from './images/search.png'
import imagemProfessor from './images/professor.jpg'
import moreInfo from './images/more.png'
import deletar from './images/delete.png'

import { listarTodos } from '../../services/professores/listar'

const Professores = ({modal}) => {

    const [listaProfessores, setProfessores] = useState([])

    useEffect(() => {
        async function listar() {
            const buscarProfessores = await listarTodos()

            const professores = buscarProfessores.data
            setProfessores(professores)
        }

        listar()
    }, [])

    const inputHandler = (event) => {
        const valorDigitado = event.target.value
    }


    const montarCardsProfessores = () => {
        
        return listaProfessores.map(professor => {
            return (
                <div key={professor.id} className="cards">
                    <div className="frente-card">
                        <div className="text text-center px-3 mt-3">
                            <h5 className="nome">{professor.nome}</h5>
                        </div>
                        <div className="text mt-3">
                            <div className="container-image-card">
                                <img src={imagemProfessor}/>
                            </div>
                        </div>
                        <div className="text tituloDois mt-3">
                            Matérias
                        </div>
                        <div className="text icons">
                            <span><img src={add} /></span><span><img src={add} /></span><span><img src={add} /></span><span><img src={add} /></span>
                        </div>
                        <div className="text tituloDois mt-3">
                            Salas
                        </div>
                        <div className="text icons">
                            <span><img src={add} /></span><span><img src={add} /></span><span><img src={add} /></span><span><img src={add} /></span>
                        </div>
                    </div>
                    <div className="moreinfo">
                        <div class="info-button">
                            <span><img src={deletar} /></span>
                            <p>Deletar</p>
                        </div>
                        <div class="info-button">
                            <span><img src={moreInfo} /></span>
                            <p>Mais info</p>
                        </div>
                    </div>
                </div>
            )
        })

    }

    return(
        <div>
            <p className="display-4 ml-5 mt-4 mb-4">Professores</p>
            <div className="container-prof d-flex justify-content-center">
                <div className="container-professores ml-3 pb-4">
                    <div className="toolbar px-2">
                        <div className="add-professor pb-1 ml-2">
                           <span><img src={add} /></span><p> Adicionar professor</p>
                        </div>
                        <div className="container-search mr-3">
                            <input type="text" className="pesquisa" onChange={inputHandler} />
                            <div className="button-search">
                                <img src={search} />
                            </div>
                        </div>
                    </div>
                    <div className="container-cards">
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Professores