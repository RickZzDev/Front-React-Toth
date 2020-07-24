import request from '../basicRequest'

const RECURSO = "escolas/"

export const listarTodos = async idEscolaLogada => {
    try {
        const requisicao = await request.get(RECURSO + idEscolaLogada + '/professores')
        return requisicao
    }
    catch(erro) {
        return erro.response
    }
}