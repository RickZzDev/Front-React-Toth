import React, { useState, useEffect } from 'react'
import './style.css'

import Select from 'react-select'
import { isLogged } from '../../../../services/escola/loginService';

const EtapaQuatro = ({setDados, dadosCadastro}) => {

    const [anos, setAnos] = useState()
    const [valorSelect, setValorSelect] = useState(null);

    useEffect(() => {
        const escolaLogged = isLogged().escola
        if(escolaLogged.tipo_escola == "Fundamental e Médio") 
            setAnos([
                {"label" : "5º Ano Fundamental", "value" : "5f"},
                {"label" : "6º Ano Fundamental", "value" : "6f"},
                {"label" : "7º Ano Fundamental", "value" : "7f"},
                {"label" : "8º Ano Fundamental", "value" : "8f"},
                {"label" : "9º Ano Fundamental", "value" : "9f"},
                {"label" : "1º Ano Médio", "value" : "1m"},
                {"label" : "2º Ano Médio", "value" : "2m"},
                {"label" : "3º Ano Médio", "value" : "3m"}
            ])
        else if(escolaLogged.tipo_escola == "Fundamental")
            setAnos(anos = [
                {"label" : "5º Ano Fundamental", "value" : "5f"},
                {"label" : "6º Ano Fundamental", "value" : "6f"},
                {"label" : "7º Ano Fundamental", "value" : "7f"},
                {"label" : "8º Ano Fundamental", "value" : "8f"},
                {"label" : "9º Ano Fundamental", "value" : "9f"}
            ])
        else if(escolaLogged.tipo_escola == "Médio")
            setAnos(anos = [
                {"label" : "1º Ano Médio", "value" : "1m"},
                {"label" : "2º Ano Médio", "value" : "2m"},
                {"label" : "3º Ano Médio", "value" : "3m"}
            ])
    }, [])

    useEffect(() => {
        if(valorSelect != null)
            setDados(
                {...dadosCadastro, 
                    4 : {"anos" : valorSelect.map(valor => { return {"id" : valor.value, "nome" : valor.label} })}}
            )
    }, [valorSelect])

    return(
        <div className="container-tres">
            <div className="titulo-materias">
                <h1>Anos</h1> 
                <h6>Selecione os anos em que o professor dá aula</h6> 
            </div>
            <div className="container-select">
                <div className="cont-etapaTres">
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