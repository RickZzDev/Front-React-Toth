import request from '../basicRequest'

let RESOURCE = "escolas/"

export const saveEscola = async escola => {
    try {
        return await request.post(RESOURCE + escola.id, escola)
    } catch(erro) {
        return erro
    }
    
}