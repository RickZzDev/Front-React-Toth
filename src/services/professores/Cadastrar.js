import request from '../basicRequest'

let RESOURCE = "escolas/"

let DELETE = "professores/"

export const saveProfessor = async (idEscola, professor) => {
    try {
        return await request.post(RESOURCE + idEscola + '/cadastrar-professor', professor)
    } catch(erro) {
        return erro.response
    }
    
}

const deletarProfessor = async idProfessor => {
    try {
        return await request.post(DELETE + idProfessor)
    } catch(erro) {
        return erro.response
    }
}

export default deletarProfessor