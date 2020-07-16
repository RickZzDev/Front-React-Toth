import React, { useState, useEffect } from 'react'

import Inputs from '../../../components/Inputs'

const EtapaUm = ({setDados, dadosCadastro, etapa}) => {

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(dadosCadastro[2].cidade != null)
            setDisabled(false)
    })

    const verificarCep = async cep => {

        var retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var infoCep = await retorno.json()

        setDados({
            ...dadosCadastro,
            2 : {
                "cep" : cep,
                "logradouro" : infoCep.logradouro,
                "bairro" : infoCep.bairro,
                "cidade" : infoCep.localidade,
                "estado" : infoCep.uf
            }
        })

        setDisabled(false)

    }
    
    return(
            <>
                <div className="container-input">
                    <Inputs setDados={setDados} verificarCep={verificarCep} dadosCadastro={dadosCadastro} etapa={etapa} type="text" name="cep" placeholder="CEP" />
                </div>
                <div className="container-input">
                    <div className="inputMaior">
                        <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="logradouro" placeholder="Logradouro" />
                    </div>
                    <div className="inputMenor">
                        <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="numero" placeholder="Nº" />
                    </div>
                </div>
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="bairro" placeholder="Bairro" />
                </div>
                <div className="container-input">
                    <div className="inputMaior">
                        <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="cidade" placeholder="Cidade" />
                    </div>
                    <div className="inputMenor">
                        <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="estado" placeholder="UF" />
                    </div>
                </div>
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} disabled={disabled} type="text" name="complemento" placeholder="Complemento" />
                </div>
            </>
    )

}

export default EtapaUm