import request from '../basicRequest'

let RESOURCE = "escolas/"

const saveProfessor = async (idEscola, professor) => {
    try {
        return await request.post(RESOURCE + idEscola + '/cadastrar-professor', professor)
    } catch(erro) {
        return erro.response
    }
    
}

export default saveProfessor