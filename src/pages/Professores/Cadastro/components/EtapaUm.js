import React from 'react'

import Inputs from '../../../components/Inputs'

const EtapaUm = ({setDados, dadosCadastro, etapa}) => {
    
    return(
            <>
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} type="text" name="nome" placeholder="Nome" />
                </div> 
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} type="text" name="rg" placeholder="RG" />
                </div>
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} type="text" name="login" placeholder="Login" />
                </div>
                <div className="container-input">
                    <Inputs setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapa} type="password" name="senha" placeholder="Senha" />
                </div>
            </>
    )

}

export default EtapaUm