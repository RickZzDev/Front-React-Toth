import React, { useState, useEffect } from 'react'
import './style.css'

import Select from 'react-select'
import { isLogged } from '../../../../services/escola/loginService';

const EtapaTres = ({setDados, dadosCadastro}) => {

    const [materiasDaEscola, setMateriasDaEscola] = useState()
    const [valorSelect, setValorSelect] = useState(null);

    useEffect(() => {
        
        const escolaLogada = isLogged().escola
        const materiasDaEscolaLogada = escolaLogada.materias

        const materias = materiasDaEscolaLogada.map(materia => {
            return {"value" : materia.id, "label" : materia.nome}
        })

        console.log(escolaLogada)
        console.log(materiasDaEscolaLogada)

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
            </div>
            <div className="container-select d-flex flex-column">
                <h6>Selecione as materias do professor</h6> 
                <div className="cont-etapaTres mt-2">
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