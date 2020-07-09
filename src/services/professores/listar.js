import request from '../basicRequest'

const RECURSO = "professores"

export const listarTodos = async () => {
    try {
        const requisicao = await request.get(RECURSO)
        return requisicao
    }
    catch(erro) {
        return erro
    }
}