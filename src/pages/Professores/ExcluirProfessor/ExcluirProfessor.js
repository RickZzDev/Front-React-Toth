import React from 'react'

import './style.css'
import deletarProfessor from '../../../services/professores/Cadastrar'

const ExcluirProfessor = ({idProfessor, closeModal, setAlert, professores, setProfessores}) => {

    const excluirProf = async (idDoProfessor) => {
        const deletar = await deletarProfessor(idDoProfessor)

        if(deletar.status == 204) {
            setAlert({'status' : 'ativado', 'msg' : 'Professor deletado com sucesso!'})
            
            const listaDeProfSemProfessorExcluido = professores.filter(professor => {
                return (professor.id != idDoProfessor) ? true : false
            })

            closeModal()

            setProfessores(listaDeProfSemProfessorExcluido)

            setTimeout(() => setAlert({'status' : 'd-none', 'msg' : ''}), 6900)
        }

    }

    return (
        <div className="container-excluir">
            <h4>Deseja realmente excluir este professor ?</h4>
            <div className="container-botoes mt-5">
                <button onClick={() => excluirProf(idProfessor)} className="btn btn-danger">Sim, excluir!</button>
                <button onClick={() => closeModal()} className="btn btn-primary">Voltar</button>
            </div>
        </div>
    )

}

export default ExcluirProfessor