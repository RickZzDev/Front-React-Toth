import React, { useState, useEffect } from 'react'
import './style.css'

import Select from 'react-select'
import { isLogged } from '../../../../services/escola/loginService';

const EtapaTres = ({setDados, dadosCadastro}) => {

    const [materiasDaEscola, setMateriasDaEscola] = useState()
    const [valorSelect, setValorSelect] = useState(null);

    useEffect(() => {

        const escolaLogada = isLogged()
        const materiasDaEscolaLogada = escolaLogada.escola.materias

        const materias = materiasDaEscolaLogada.map(materia => {
            return {"value" : materia.id, "label" : materia.nome}
        })

        setMateriasDaEscola(materias)

    }, [])

    useEffect(() => {
        if(valorSelect != null)
            setDados(
                {...dadosCadastro, 
                    3 : {"materias" : valorSelect.map(valor => { return {"id" : valor.value, "nome" : valor.label} })}}
            )
    }, [valorSelect])

    return(
        <div className="container-tres">
            <div className="titulo-materias">
                <h1>Matérias</h1> 
                <h6>Selecione as materias do professor</h6> 
            </div>
            <div className="container-select">
                <div className="cont-etapaTres">
                    <Select
                        placeholder="Seleciona as matérias"
                        value={valorSelect}
                        onChange={(selected) => {setValorSelect(selected)}}
                        options={materiasDaEscola}
                        isMulti
                    />
                </div>
            </div>
        </div>
    )

}

export default EtapaTres