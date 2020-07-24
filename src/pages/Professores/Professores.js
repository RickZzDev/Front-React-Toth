import React, { useState, useEffect } from 'react'
import './style.css'

import add from './images/add.png'
import search from './images/search.png'
import imagemProfessor from './images/professor.jpg'
import moreInfo from './images/more.png'
import deletar from './images/delete.png'

import { listarTodos } from '../../services/professores/listar'

import IconeMateria from '../components/IconeMateria'
import { isLogged } from '../../services/escola/loginService'
import InfoProfessor from './InfoProfessor/InfoProfessor'

const Professores = ({setModal, alerta, listaProfessores, setProfessores}) => {

   const [valorBarraPesquisa, setValorBarraPesquisa]  = useState()

   const [professoresDaEscola, setProfessoresDaEscola] = useState()

   const [cardsDosProfessores, setCardsDosProfessores] = useState()

    const [infoProf, setInfoProf] = useState({"status" : "desativado", "professor" : null})

    useEffect(() => {
        async function listar() {
            let idEscolaLogada = null

            if(!(isLogged().id == null))
                idEscolaLogada = isLogged().id
            else
                idEscolaLogada = isLogged().escola.id

            const buscarProfessores = await listarTodos(idEscolaLogada)
            const professores = buscarProfessores.data

            console.log(buscarProfessores)
            console.log(professores)
            setProfessores(professores)
            setProfessoresDaEscola(professores)
        }

        listar()
    }, [])

    useEffect(() => {
        setCardsDosProfessores(montarCardsProfessores())
    }, [listaProfessores])

    useEffect(() => {

        if(valorBarraPesquisa == '')
            return setProfessores(professoresDaEscola)

        const professoresFiltrados = listaProfessores.filter(professor => {
            return ( professor.nome.indexOf(valorBarraPesquisa) != -1 ) ? true : false
        })

        setProfessores(professoresFiltrados)

    }, [valorBarraPesquisa])

    const renderizarIcones = materiasDoProfessor => {
        return materiasDoProfessor.map(materia => {
            return <span key={materia.id}><IconeMateria key={materia.id} materia={materia} /></span>
        })
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
                            {renderizarIcones(professor.materias)}
                        </div>
                        <div className="text tituloDois mt-3">
                            Salas
                        </div>
                        <div className="text icons">
                            
                        </div>
                    </div>
                    <div className="moreinfo">
                        <div class="info-button">
                            <span onClick={() => setModal({"status" : "ativado", "componente" : "excluirProfessor", "dados" : professor.id})}><img src={deletar} /></span>
                            <p>Deletar</p>
                        </div>
                        <div class="info-button">
                            <span onClick={() => visualizarProfessor(professor)}><img src={moreInfo} /></span>
                            <p>Mais info</p>
                        </div>
                    </div>
                </div>
            )
        })

    }

    const visualizarProfessor = professor => {

        setInfoProf({"status" : "ativado", "professor" : professor})

    }

    const fecharVisualizar = () => {
        setInfoProf({"status" : "desativado", "professor" : null})
    }

    if(infoProf.status == "desativado")
        return(
            <div className="cont-prof">
                <div className="container mt-3">
                    <div className="container-titulo">
                        <p className="display-4">
                            Professores
                        </p>
                        <div className={`alert alert-success success ${alerta.status}`}>
                            {alerta.msg}
                        </div>
                    </div>
                </div>
                <div className="container-prof d-flex justify-content-center mt-4">
                    <div className="container-professores ml-3 pb-4">
                        <div className="toolbar px-2">
                            <div onClick={() => setModal({"status" : "ativado", "componente" : "cadastro"})} className="add-professor pb-1 ml-2">
                            <span><img src={add} /></span><p> Adicionar professor</p>
                            </div>
                            <div className="container-search mr-3">
                                <input type="text" className="pesquisa" onChange={(e) => setValorBarraPesquisa(e.target.value)} />
                                <div className="button-search">
                                    <img src={search} />
                                </div>
                            </div>
                        </div>
                        <div className="container-cards">
                            {cardsDosProfessores}
                        </div>
                    </div>
                </div>
            </div>
        )
    else
        return <div className="cont-prof"><InfoProfessor professor={infoProf.professor} fecharVisualizar={fecharVisualizar} /></div>

}

export default Professores