import React from 'react'

import './style.css'

const Endereco = ({professor}) => {

    console.log(professor)
    return (
        <div className="container-endereco">
            <div className="container-texto">
                <h5>Nome</h5>
                <p>{professor.endereco.bairro}</p>
            </div>
            <div className="container-texto">
                <h5>Login</h5>
                <p>{professor.endereco.cep}</p>
            </div>
            <div className="container-texto">
                <h5>Cidade</h5>
                <p>{professor.endereco.cidade}</p>
            </div>
            <div className="container-texto">
                <h5>Complemento</h5>
                <p>{professor.endereco.complemento}</p>
            </div>
            <div className="container-texto">
                <h5>Estado</h5>
                <p>{professor.endereco.estado}</p>
            </div>
            <div className="container-texto">
                <h5>Logradouro</h5>
                <p>{professor.endereco.logradouro}</p>
            </div>
            <div className="container-texto">
                <h5>Numero</h5>
                <p>{professor.endereco.numero}</p>
            </div>
        </div>
    )

}

export default Endereco