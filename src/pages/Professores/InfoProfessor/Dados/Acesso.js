import React from 'react'

import './style.css'

const Acesso = ({professor}) => {

    return (
        <div className="container-acesso">
            <div className="container-texto">
                <h5>Nome</h5>
                <p>{professor.nome}</p>
            </div>
            <div className="container-texto">
                <h5>Login</h5>
                <p>{professor.acesso.login}</p>
            </div>
            <div className="container-texto">
                <h5>RG</h5>
                <p>{professor.rg}</p>
            </div>
        </div>
    )

}

export default Acesso