import request from '../basicRequest'

let RESOURCE = "professores/cadastro"

const saveProfessor = async professor => {
    try {
        return await request.post(RESOURCE, professor)
    } catch(erro) {
        return erro.response
    }
    
}

export default saveProfessor