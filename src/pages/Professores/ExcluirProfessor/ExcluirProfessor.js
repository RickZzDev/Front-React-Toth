import React from 'react'

const ExcluirProfessor = () => {

    return (
        <div className="container-excluir">
            <h5>Deseja realmente excluir este professor ?</h5>
            <div className="container-botoes">
                <button className="btn btn-danger">Sim, excluir!</button>
                <button className="btn btn-primary">Voltar</button>
            </div>
        </div>
    )

}

export default ExcluirProfessor