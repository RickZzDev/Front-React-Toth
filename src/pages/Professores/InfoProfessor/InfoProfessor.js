import React, { useState } from 'react'
import './style.css'

import fotoProfessor from '../images/professor.jpg'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import adress from './images/adress-amarelo-grande.png'
import materias from './images/materias-grande.png'
import teacher from './images/teacher-verde-grande.png'
import user from './images/user-azul-grande.png'
import Acesso from './Dados/Acesso'
import Endereco from './Dados/Endereco'
import Materia from './Dados/Materia'
import Ano from './Dados/Ano'

const InfoProfessor = ({professor, fecharVisualizar}) => {

    const [options, setOptions] = useState([
        {"id" : '1', "classe" : ''},
        {"id" : '2', "classe" : ''},
        {"id" : '3', "classe" : ''},
        {"id" : '4', "classe" : ''}
    ])

    const [optionSelecionado, setOptionSelecionado] = useState("1")

    const [edit, setEdit] = useState('visualizar')

    const selecionarOption = (dataId) => {

        switch(dataId) { 
            case "1":
                setOptions([{"id" : '1', "classe" : 'itemAtivado'},{"id" : '2', "classe" : ''},
                            {"id" : '3', "classe" : ''},{"id" : '4', "classe" : ''}])
                break;
            case "2":
                setOptions([{"id" : '1', "classe" : ''},{"id" : '2', "classe" : 'itemAtivado'},
                            {"id" : '3', "classe" : ''},{"id" : '4', "classe" : ''}])
                break;
            case "3":
                setOptions([{"id" : '1', "classe" : ''},{"id" : '2', "classe" : ''},
                            {"id" : '3', "classe" : 'itemAtivado'},{"id" : '4', "classe" : ''}])
                break;
            case "4":
                setOptions([{"id" : '1', "classe" : ''},{"id" : '2', "classe" : ''},
                            {"id" : '3', "classe" : ''},{"id" : '4', "classe" : 'itemAtivado'}])
                break;
        }

        setOptionSelecionado(dataId)

    }

    const renderizarDados = () => {
        
        switch(optionSelecionado){
            case "1":
                return <Acesso professor={professor} />
            case "2":
                return <Endereco professor={professor}/>
            case "3":
                return <Materia materias={professor.materias}/>
            case "4":
                return <Ano anos={professor.anos}/>
        }

    }

    return(
        <div className="container-infoProf pl-5">
             <div className="row d-flx justify-content-between m-0 flex-row mt-5 align-items-center pr-5">
                <div className="nome-foto">
                    <div className="container-foto">
                        <img src={fotoProfessor} />
                    </div>
                    <h3 className="ml-4">{professor.nome}</h3>
                </div>
                <div onClick={() => fecharVisualizar()} className="mr-4 fechar">
                    <FontAwesomeIcon icon={faTimes} size="lg" color="#bdbdbd"/>
                </div>
             </div>
             <div className="row d-flex justify-content-center align-items-center mt-4 px-4 m-0">
                <div className="container-info">
                    <div className="container-options d-flex flex-row">
                        <div data-id="1" onClick={(e) => selecionarOption(e.target.dataset.id)} className={`option ${options[0].classe }`}>
                            <img src={user} /> 
                            <p className="mt-2">Acesso</p>
                        </div>
                        <div data-id="2" onClick={(e) => selecionarOption(e.target.dataset.id)} className={`option ${options[1].classe }`}>
                            <img src={adress} />
                            <p className="mt-2">Endereço</p>
                        </div>
                        <div data-id="3" onClick={(e) => selecionarOption(e.target.dataset.id)} className={`option ${options[2].classe }`}>
                            <img src={materias} />
                            <p className="mt-2">Matérias</p>
                        </div>
                        <div data-id="4" onClick={(e) => selecionarOption(e.target.dataset.id)} className={`option  ${options[3].classe }`}>
                            <img src={teacher} />
                            <p className="mt-2">Anos</p>
                        </div>
                    </div>
                    <div className="dados">
                        {renderizarDados()}
                    </div>
                </div>
             </div>
        </div>
    )

}

export default InfoProfessor