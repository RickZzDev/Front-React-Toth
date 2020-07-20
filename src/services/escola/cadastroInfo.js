import request from '../basicRequest'

let RESOURCE = "escolas/"

export const saveEscola = async escola => {
    try {
        return await request.post(RESOURCE + escola.id, escola)
    } catch(erro) {
        return erro.response
    }
    
}

export const getMaterias = async () => {
    try {
        return await request.get('/materias')
    } catch(erro) {
        return erro.response
    }
}

export const getAnos = async () => {
    try {
        return await request.get('/anos')
    } catch(erro) {
        return erro.response
    }
}