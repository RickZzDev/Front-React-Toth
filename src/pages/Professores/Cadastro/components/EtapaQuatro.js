import React, { useState, useEffect } from 'react'
import './style.css'

import Select from 'react-select'
import { isLogged } from '../../../../services/escola/loginService';

const EtapaQuatro = ({setDados, dadosCadastro}) => {

    const [anos, setAnos] = useState()
    const [valorSelect, setValorSelect] = useState(null);

    useEffect(() => {
        const anosDaEscolaLogada = isLogged().escola.anos
        
        const criarOption = ano => {
            if(ano.id <= 9)
                return { "value" : ano.id, "label" : `${ano.id}º Ano Fundamental` }
            else
                return { "value" : ano.id, "label" : `${ano.id}º Ano Médio` }
        }

        const criandoOptionsComOsAnos = anosDaEscolaLogada.map(ano => { return criarOption(ano) })
        setAnos(criandoOptionsComOsAnos)
        
    }, [])

    useEffect(() => {
        if(valorSelect != null)
            setDados(
                {...dadosCadastro, 
                    4 : {"anos" : valorSelect.map(valor => { return {"id" : valor.value, "ano" : valor.label.split("º")[0]} })}}
            )
        
        console.log(dadosCadastro[4].anos)
    }, [valorSelect])

    return(
        <div className="container-tres">
            <div className="titulo-materias">
                <h1>Anos</h1>
            </div>
            <div className="container-select d-flex flex-column">
                <h6>Selecione os anos em que o professor dá aula</h6> 
                <div className="cont-etapaTres mt-2">
                    <Select
                        placeholder="Seleciona os anos"
                        value={valorSelect}
                        onChange={(selected) => {setValorSelect(selected)}}
                        options={anos}
                        isMulti
                    />
                </div>
            </div>
        </div>
    )

}

export default EtapaQuatro